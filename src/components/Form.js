import React, { useState } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";



const Form = () => {

    const allInputs = {imgUrl: ""}
    const [file, setFile] = useState(null);
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [error, setError] = useState(null);

    //types
    const types = ["image/png", "image/jpeg"];

    console.log(file)
    const handleInputFile = (e)=>{
        const selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile)
            setError('')
            
        } else {
            setFile(null)
            setError("Select an image file .png or .jpeg")
            console.log(error);
        }
    }

    const handleUpload = (e)=>{
        e.preventDefault();
        console.log('start of upload');
        if (file === "") {
            console.log(`not an image, image file is: ${typeof(file)}`);
        }


        
        // Points to the root reference
        const storageRef = ref(storage);

        // Points to 'images'
        const imagesRef = ref(storageRef, 'images');

         // Points to 'images/space.jpg'
        // Note that you can use variables to create child values
       
        const spaceRef = ref(imagesRef, file.name);

        // //create ref to storage v8 -old-
        // const uploadTask = storage.ref(`/images/${file.name}`).put(file)

        
        // 'file' comes from the Blob or File API
        const uploadTask = uploadBytes(imagesRef, file.name).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

        // // Register three observers:
        // // 1. 'state_changed' observer, called any time the state changes
        // // 2. Error observer, called on failure
        // // 3. Completion observer, called on successful completion
        // uploadTask.on('state_changed', 
        // (snapshot) => {
        // // Observe state change events such as progress, pause, and resume
        // // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        
        // }, 
        // (error) => {
        // console.log(error);
        // }, 
        // async () => {
        // // Handle successful uploads on complete
        // // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //     console.log('File available at', downloadURL);
        //     });
        // }
        

        // );
    }


    
   

    return (
        <>
        <form onSubmit={handleUpload}>
            <input type="file" onChange={handleInputFile} />
            <button type = 'submit'>Upload</button>
        </form>
        {/* <div>
            <img src={imageAsUrl.imgUrl} alt="image-tag"/>
        </div> */}
        </>
    )
}


export default Form
