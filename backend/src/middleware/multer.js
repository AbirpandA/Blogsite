const multer = require('multer');
const path = require('path');
const cloudinary = require('./cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blogimages', 
    allowed_formats: ['jpeg', 'jpg', 'png', 'gif'], 
  },
});

const upload = multer({ storage });

module.exports = upload;
