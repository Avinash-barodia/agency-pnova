const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk('src').filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const regex = /rounded-(sm|md|lg|xl|2xl|3xl|\[\d+px\])/g;
  
  if (regex.test(content)) {
    const matches = content.match(regex);
    totalReplacements += matches.length;
    
    content = content.replace(regex, 'rounded-none');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}: ${matches.length} replacements`);
  }
});

console.log(`\nFinished! Total classes replaced: ${totalReplacements}`);
