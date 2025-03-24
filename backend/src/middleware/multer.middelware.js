// import multer from 'multer'


// const storage = multer.diskStorage({
  
  
//   destination: function (req, file, cb) {
    
//     cb(null, './public/images')
//   },
//   filename: function (req, file, cb) {
//     // cb(null, file.originalname)
//   }
// })

// export const upload = multer({ storage: storage })



import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure the upload directory exists
const uploadDir = "./public/images";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

// File Type Validation
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only .jpg, .png, and .gif files are allowed!"), false);
    }
};

// File Upload Limits
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 100 * 1024 }, // 100kb limit
});

//  Export Middleware for Routes
export { upload };
