const fs = require('fs');
const content = fs.readFileSync('src/lib/portfolio-data.ts', 'utf8');
// It's easier to just read the array and re-write it.
