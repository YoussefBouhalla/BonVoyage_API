// requiring multer
const path = require('path');
const multer = require('multer');

// storage function
function manageStorage(pathName){
    return multer.diskStorage({   
        destination: function(req, file, cb) { 
           cb(null, pathName );    
        }, 
        filename: function(req, file, cb) { 
           cb(null , `image_${Date.now()}${path.extname(file.originalname).toLowerCase()}`);   
        }
     })
}

// filter function
const fFilter = (req, file, cb) =>{    
    // Allowed ext
     const filetypes = /jpeg|jpg|png/;
  
   // Check ext
    const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
   // Check mime
   const mimetype = filetypes.test(file.mimetype);

   if(mimetype && extname){
       return cb(null,true);
   } else {
       cb('Error: Images Only!');
   }
}

const userCoverUpload = multer({  fileFilter: fFilter , storage: manageStorage(path.join(path.dirname(path.dirname(__dirname)) , 'public' , 'uploads' , 'images' , 'usercovers')) })

const userImageUpload = multer({ fileFilter: fFilter , storage: manageStorage(path.join(path.dirname(path.dirname(__dirname)) , 'public' , 'uploads' , 'images' , 'userimages')) })

const tourImageUpload = multer({ fileFilter: fFilter , storage: manageStorage(path.join(path.dirname(path.dirname(__dirname)) , 'public' , 'uploads' , 'images' , 'tours')) })

const stayImageUpload = multer({ fileFilter: fFilter , storage: manageStorage(path.join(path.dirname(path.dirname(__dirname)) , 'public' , 'uploads' , 'images' , 'stays')) })

module.exports = {
    userCoverUpload,
    userImageUpload,
    tourImageUpload,
    stayImageUpload
}