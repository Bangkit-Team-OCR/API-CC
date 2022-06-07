const {Storage} = require('@google-cloud/storage');
const fs = require('fs');

// Creates a client
const storage = new Storage({keyFilename: "corded-palisade-351608-598fc5184b8e.json"});

async function uploadFromMemory(base64Image, imageName) {
  const data = Buffer.from(base64Image, 'base64');
  const bucketName = 'capstone-bangkit-ocr';
  const destFileName = `ktp/${imageName}.jpg`;
  await storage.bucket(bucketName).file(destFileName).save(data);

  console.log(
    `successfully uploaded to ${bucketName}.`
  );
}

// uploadFromMemory().catch(console.error);

module.exports = { uploadFromMemory };
