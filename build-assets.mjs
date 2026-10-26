import {copyFile} from 'node:fs/promises';
for(const file of ['DejaVuSans.ttf','icon.svg','favicon.svg','icon-192.png','icon-512.png','manifest.webmanifest','sw.js'])await copyFile(file,'dist/'+file);
await copyFile('node_modules/pdfjs-dist/build/pdf.worker.min.mjs','dist/pdf.worker.min.mjs');
