const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Colors
    content = content.replace(/#D4AF37/gi, '#C9A84C');
    content = content.replace(/#0B0B0B/gi, '#0A0A0A');
    content = content.replace(/bg-\[#111\]/g, 'bg-[#0A0A0A]');
    content = content.replace(/bg-\[#111111\]/g, 'bg-[#0A0A0A]');
    
    // Removing rounded classes on buttons
    // Since we want ALL buttons to have sharp corners, let's look for `<button ... className="..."`
    // We will do a generic replace for button tags.
    content = content.replace(/<button[^>]*className="([^"]*)"[^>]*>/g, function(match, classNames) {
        let newClasses = classNames.replace(/rounded-full/g, '')
                                   .replace(/rounded-xl/g, '')
                                   .replace(/rounded-\[.*?\]/g, '')
                                   .replace(/rounded-lg/g, '')
                                   .replace(/rounded-md/g, '')
                                   .replace(/rounded-sm/g, '')
                                   .replace(/rounded/g, '')
                                   .replace(/\s+/g, ' ').trim();
        return match.replace(classNames, newClasses);
    });

    // Also update a tags acting as CTA buttons (e.g., inline-flex with px- py- rounded)
    // Actually, maybe it's easier to just find `rounded-full` where we expect CTA. Let's stick to buttons first.

    if(content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated file:', file);
    }
});
