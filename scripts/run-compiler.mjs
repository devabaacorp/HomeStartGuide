import fs from 'fs';
import path from 'path';
import { compileHtmlToJsx } from './compile-html-to-jsx.mjs';

const indexHtmlPath = 'e:\\Copy Website\\finbiz\\httrack-ref\\finbiz-nextjs.netlify.app\\index.html';
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Build Header component
const headerStart = '<header class="header--sticky';
const headerEnd = '</header>';
const headerHtml = indexHtml.substring(indexHtml.indexOf(headerStart), indexHtml.indexOf(headerEnd) + headerEnd.length);
const headerJsx = compileHtmlToJsx(headerHtml);
fs.writeFileSync('e:\\Copy Website\\finbiz\\app\\components\\Header.js', `import Link from 'next/link';\n\nexport default function Header() {\n  return (\n    ${headerJsx}\n  );\n}\n`);
console.log('Compiled Header.js');

// 2. Build Footer component
const footerStart = '<div class="rts-footer-area';
const footerStartIndex = indexHtml.indexOf(footerStart);
const scriptIndexAfterFooter = indexHtml.indexOf('<script', footerStartIndex);
let footerHtml = indexHtml.substring(footerStartIndex, scriptIndexAfterFooter !== -1 ? scriptIndexAfterFooter : indexHtml.length);
const footerJsx = compileHtmlToJsx(footerHtml);
fs.writeFileSync('e:\\Copy Website\\finbiz\\app\\components\\Footer.js', `import Link from 'next/link';\n\nexport default function Footer() {\n  return (\n    ${footerJsx}\n  );\n}\n`);
console.log('Compiled Footer.js');

// 3. Build SearchOverlay component
const searchStart = '<div class="search-input-area "';
const searchHtml = indexHtml.substring(indexHtml.indexOf(searchStart), indexHtml.indexOf('<div id="anywhere-home"'));
const searchJsx = compileHtmlToJsx(searchHtml);
fs.writeFileSync('e:\\Copy Website\\finbiz\\app\\components\\SearchOverlay.js', `export default function SearchOverlay() {\n  return (\n    ${searchJsx}\n  );\n}\n`);
console.log('Compiled SearchOverlay.js');

// 4. Build Sidebar component
const sideBarStart = '<div id="side-bar"';
const sideBarStartIndex = indexHtml.indexOf(sideBarStart);
const bannerStartIndex = indexHtml.indexOf('class="rts-banner-area');
let sideBarHtml = indexHtml.substring(sideBarStartIndex, bannerStartIndex !== -1 ? bannerStartIndex : indexHtml.length);
const lastWrapperIndex = sideBarHtml.lastIndexOf('<div><div');
if (lastWrapperIndex !== -1) {
  sideBarHtml = sideBarHtml.substring(0, lastWrapperIndex);
}
const sideBarJsx = compileHtmlToJsx(sideBarHtml);
fs.writeFileSync('e:\\Copy Website\\finbiz\\app\\components\\Sidebar.js', `import Link from 'next/link';\n\nexport default function Sidebar() {\n  return (\n    ${sideBarJsx}\n  );\n}\n`);
console.log('Compiled Sidebar.js');


// 5. Compile all Page routes recursively
const srcDir = 'e:\\Copy Website\\finbiz\\httrack-ref\\finbiz-nextjs.netlify.app';
const destDir = 'e:\\Copy Website\\finbiz\\app';

function scanAndCompile(dir, relativeDir = '') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip asset and build system directories
      if (file === '_next' || file === 'assets') continue;
      scanAndCompile(fullPath, path.join(relativeDir, file));
    } else {
      // Process files
      // Ignore index-2.html and HTTrack cache query parameter files
      if (file.startsWith('index04b9') || file === 'index-2.html') continue;
      
      if (file.endsWith('.html') || file === 'team-style-2') {
        const pageHtml = fs.readFileSync(fullPath, 'utf8');
        
        // Skip 404 pages
        if (pageHtml.includes('<title>404: This page could not be found.</title>')) {
          console.log(`Skipped 404/redirect page: ${path.join(relativeDir, file)}`);
          continue;
        }
        
        let route = path.join(relativeDir, file.replace(/\.html$/, ''));
        if (route === 'index') {
          route = '';
        }
        
        let startIndex = 0;
        const sidebarTerminator = 'quote-btnmenu" href="#">Get Quote</a>';
        const termIndex = pageHtml.indexOf(sidebarTerminator);
        if (termIndex !== -1) {
          let pos = termIndex + sidebarTerminator.length;
          while (pos < pageHtml.length) {
            if (pageHtml.substring(pos, pos + 6) === '</div>') {
              pos += 6;
            } else if (pageHtml[pos] === ' ' || pageHtml[pos] === '\n' || pageHtml[pos] === '\r' || pageHtml[pos] === '\t') {
              pos++;
            } else {
              break;
            }
          }
          startIndex = pos;
        } else {
          let startStr = '<div id="anywhere-home"';
          let idx = pageHtml.indexOf(startStr);
          if (idx !== -1) {
            startIndex = pageHtml.indexOf('>', idx) + 1;
          } else {
            startIndex = pageHtml.indexOf('<header') > -1 ? pageHtml.indexOf('</header>') + 9 : 0;
          }
        }
        
        const endIndex = pageHtml.indexOf('<div class="rts-footer-area', startIndex);
        let bodyHtml;
        if (endIndex !== -1) {
          bodyHtml = pageHtml.substring(startIndex, endIndex);
        } else {
          const scriptStart = pageHtml.indexOf('<script', startIndex);
          if (scriptStart !== -1) {
            bodyHtml = pageHtml.substring(startIndex, scriptStart);
          } else {
            bodyHtml = pageHtml.substring(startIndex);
          }
        }
        
        const pageJsx = compileHtmlToJsx(bodyHtml);
        
        // Create Next.js route directory
        const targetDir = route === '' ? destDir : path.join(destDir, route);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        
        const targetFile = path.join(targetDir, 'page.js');
        fs.writeFileSync(targetFile, `import Link from 'next/link';\n\nexport default function Page() {\n  return (\n    ${pageJsx}\n  );\n}\n`);
        console.log(`Compiled page: /${route.replace(/\\/g, '/')}`);
      }
    }
  }
}

scanAndCompile(srcDir);

console.log('All components and pages compiled successfully!');
