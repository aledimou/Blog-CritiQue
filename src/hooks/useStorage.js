import { Firestore } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore, projectStorage, timestamp } from "../firebase/config";


// const useStorage = (file)=>{

//     //references
//     const storageRef = projectStorage.ref(file.name);
//     const collectionRef = projectFirestore.collection("images");

//     //put file into location
//     storageRef
//     .put(file)
//     .then((snap)=>{
//         console.log("Uploaded");
//     })
//     .catch(error=>console.log(error));
//     })


// }