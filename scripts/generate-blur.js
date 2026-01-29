const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateBlur(imagePath) {
  const buffer = await sharp(imagePath)
    .resize(10, 10, { fit: 'inside' })
    .blur()
    .toBuffer();
  return `data:image/jpeg;base64,${buffer.toString('base64')}`;
}

const heroImages = ['hero-museum.jpg', 'museum-building.jpg', 'sugar-mill-historic.jpg'];
const inputDir = path.join(__dirname, '../public/images');

async function main() {
  const blurs = {};
  for (const img of heroImages) {
    const imgPath = path.join(inputDir, img);
    if (fs.existsSync(imgPath)) {
      try {
        blurs[img] = await generateBlur(imgPath);
        console.log(`${img}: ${blurs[img].substring(0, 50)}...`);
      } catch (err) {
        console.error(`Error processing ${img}:`, err.message);
      }
    } else {
      console.log(`Skipping ${img} - file not found`);
    }
  }

  const libDir = path.join(__dirname, '../src/lib');
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(libDir, 'blur-data.ts'),
    `export const blurDataURLs: Record<string, string> = ${JSON.stringify(blurs, null, 2)}\n`
  );
  console.log('Blur data written to src/lib/blur-data.ts');
}

main().catch(console.error);
