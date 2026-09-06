import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uiDir = path.join(__dirname, '../public/ui');

if (!fs.existsSync(uiDir)) {
  fs.mkdirSync(uiDir, { recursive: true });
}

// Generate simple valid uncompressed PNG files for each destination
// Or copy SVG/PNG files cleanly.

console.log('UI Dir verified:', uiDir);
