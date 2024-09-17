
const sharp = require('sharp');
const fs = require('fs');
const directory = './images';

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp'
};


function collect(folder) {
let collectionImages = []

const images = fs.readdirSync(folder, {withFileTypes:true})

for (const item of images) {
  if (item.isDirectory()) {
    collectionImages = collectionImages.concat(collect(`${folder}/${item.name}`))
  }
  else {
      collectionImages.push(`${folder}/${item.name}`)
  }
}
return collectionImages
}

const imagesToResize = collect(directory)
console.log(imagesToResize)

imagesToResize.forEach(async file => {
  const name = file.split(' ').join('_')
  .split('.jpg').join('')
  .split('.png').join('')
  .split('.jpeg').join('');
  await sharp(`${file}`)
  .metadata()
  .then(({ width, height }) => sharp(`${file}`)
    .resize(Math.round(width * 0.25), Math.round(height * 0.25), {
      fit: sharp.fit.cover
    })
    .toFormat('webp')
    .toFile(`${name}.webp`)
  )
  })