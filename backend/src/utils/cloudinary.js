import { v2 as cloudinary } from 'cloudinary';

import fs from 'fs'
 



const uploadOnCloudinary = async (localFilePath) => {
    // not Available local file path
    try {
        if(!localFilePath) return "local file path not found"
        // console.log("local path found", `./${localFilePath}`);
        
        
        const cloudinaryResponce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        // if file uploaded sucessfully
        // console.log("file uploaded sucessfully: ",cloudinaryResponce.url );
        fs.unlinkSync(localFilePath)
        return cloudinaryResponce
        

    } catch (error) {
        fs.unlinkSync(localFilePath)
        console.log(error);
        
        return "uploader issue in cloudinary"
    }
}


export {uploadOnCloudinary}