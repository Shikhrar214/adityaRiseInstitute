import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


;(()=>{cloudinary.config({ 
    cloud_name: 'dn0umhtlj', 
    api_key: '589822799696186', 
    api_secret: 'Xr6jab5BpkEk7z9_An4cEwW74X0'
})})()

// ;(() => {cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET 
// });})()


const uploadOnCloudinary = async (localFilePath) => {
    // not Available local file path
    try {
        if(!localFilePath) return "local file path not found"
        console.log("local path found", `./${localFilePath}`);
        
        
        const cloudinaryResponce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        // if file uploaded sucessfully
        console.log("file uploaded sucessfully: ",cloudinaryResponce.url );
        // fs.unlinkSync(localFilePath)
        return cloudinaryResponce
        

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return "uploader issue in cloudinary"
    }
}


export {uploadOnCloudinary}