import { parseDocument } from 'htmlparser2';

// JSX Serializer
function serializeNode(node) {
  if (node.type === 'text') {
    let text = node.data;
    if (/^\s*$/.test(text)) return text;
    // Escape curly braces and angle brackets in JSX
    return text
      .replace(/[{}]/g, match => `{"${match}"}`)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  
  if (node.type === 'comment') {
    return ''; // Ignore comments to keep JSX clean
  }
  
  if (node.type === 'script') {
    return ''; // Skip script tags entirely
  }
  
  if (node.type === 'style') {
    // Write style tag safely
    let styleContent = '';
    if (node.children && node.children[0]) {
      styleContent = node.children[0].data || '';
    }
    return `<style dangerouslySetInnerHTML={{ __html: \`${styleContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />`;
  }
  
  if (node.type === 'tag') {
    let tagName = node.name;
    
    // Next.js Link routing conversion
    let isLink = false;
    let href = '';
    if (tagName === 'a' && node.attribs && node.attribs.href) {
      const originalHref = node.attribs.href.trim();
      if (
        !originalHref.startsWith('#') &&
        !originalHref.startsWith('http') &&
        !originalHref.startsWith('mailto:') &&
        !originalHref.startsWith('tel:') &&
        !originalHref.startsWith('javascript:')
      ) {
        isLink = true;
        // Clean and normalize the href
        let clean = originalHref.split('?')[0].split('#')[0];
        const hash = originalHref.includes('#') ? '#' + originalHref.split('#')[1] : '';
        
        // Remove file extensions and relative path markers
        clean = clean.replace(/\.html$/, '');
        clean = clean.replace(/^(\.\.\/)+/, '');
        clean = clean.replace(/^\.\//, '');
        
        if (clean === 'index' || clean === '') {
          href = '/' + hash;
        } else {
          href = '/' + clean + hash;
        }
        // Normalize double slashes
        href = href.replace(/\/+/g, '/');
      }
    }
    
    let attrStr = '';
    
    if (node.attribs) {
      for (let [key, val] of Object.entries(node.attribs)) {
        if (isLink && key === 'href') {
          attrStr += ` href="${href}"`;
          continue;
        }
        
        let jsxKey = key;
        if (key === 'class') {
          jsxKey = 'className';
        }
        else if (key === 'for') {
          jsxKey = 'htmlFor';
        }
        else if (key.includes('-')) {
          // Convert SVG and other attributes to camelCase (excluding data-* and aria-*)
          if (!key.startsWith('data-') && !key.startsWith('aria-')) {
            jsxKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          }
        }
        
        // Convert style strings to JSX style objects
        if (key === 'style') {
          const styleObj = {};
          val.split(';').forEach(rule => {
            const parts = rule.split(':');
            if (parts.length >= 2) {
              const styleKey = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
              const styleVal = parts.slice(1).join(':').trim();
              if (styleKey) {
                styleObj[styleKey] = styleVal;
              }
            }
          });
          
          if (Object.keys(styleObj).length > 0) {
            const reactStyleStr = Object.entries(styleObj).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(', ');
            attrStr += ` style={{ ${reactStyleStr} }}`;
          }
          continue;
        }
        
        // Boolean attributes
        const booleanAttrs = ['required', 'checked', 'disabled', 'autoplay', 'playsinline', 'muted', 'loop', 'controls', 'multiple', 'readonly'];
        if (booleanAttrs.includes(key)) {
          attrStr += ` ${jsxKey}={true}`;
          continue;
        }
        
        // Standard attributes (handling escapes)
        attrStr += ` ${jsxKey}=${JSON.stringify(val)}`;
      }
    }
    
    const selfClosingTags = ['img', 'input', 'br', 'hr', 'link', 'meta', 'source', 'col'];
    let renderedTag = isLink ? 'Link' : tagName;
    
    if (selfClosingTags.includes(tagName)) {
      return `<${renderedTag}${attrStr} />`;
    }
    
    let childrenStr = '';
    if (node.children) {
      childrenStr = node.children.map(serializeNode).join('');
    }
    
    return `<${renderedTag}${attrStr}>${childrenStr}</${renderedTag}>`;
  }
  
  return '';
}

export function compileHtmlToJsx(htmlStr) {
  // Fix asset links in htmlStr
  htmlStr = htmlStr.replace(/src="assets\//g, 'src="/assets/');
  
  const dom = parseDocument(htmlStr);
  const jsxElements = dom.children.map(serializeNode).join('').trim();
  
  return `<>\n      ${jsxElements}\n    </>`;
}
