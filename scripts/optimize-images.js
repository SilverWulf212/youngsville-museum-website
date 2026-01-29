const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = fs.readdirSync(inputDir).filter(f =>
  /\.(jpg|jpeg|png|gif)$/i.test(f)
);

async function optimizeImages() {
  for (const img of images) {
    const inputPath = path.join(inputDir, img);
    const baseName = path.parse(img).name;

    if (fs.statSync(inputPath).isDirectory()) continue;

    console.log(`Processing: ${img}`);

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${baseName}.webp`));

      await sharp(inputPath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(path.join(outputDir, `${baseName}.jpg`));

      const sizes = [640, 768, 1024, 1280, 1920];
      for (const width of sizes) {
        await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(path.join(outputDir, `${baseName}-${width}w.webp`));
      }

      console.log(`  Optimized: ${img}`);
    } catch (err) {
      console.error(`  Error processing ${img}:`, err.message);
    }
  }
  console.log('Done!');
}

optimizeImages().catch(console.error);
