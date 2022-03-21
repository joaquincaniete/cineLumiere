

// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getDoc, getFirestore, Timestamp, updateDoc} from "firebase/firestore"
import Item from "../components/Item";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2bgCl8M0t12Dp0WX1BpYaa8RDpt9PPlY",
  authDomain: "coderhouse-cinelumiere.firebaseapp.com",
  projectId: "coderhouse-cinelumiere",
  storageBucket: "coderhouse-cinelumiere.appspot.com",
  messagingSenderId: "349033487234",
  appId: "1:349033487234:web:aeafb0df2dc2f4f682cd9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//generar orden
export const generarOrden = async (orden) =>{
  const newOrden = addDoc(collection(db, "ordenes"),{
    ...orden,
    date: Timestamp.fromDate(new Date()), 
  })
  return newOrden;
}

// manejo del stock
export const actualizarStock = async(idPeli, cantidad) => {
  const item = await getDoc(doc(db, "Items", idPeli))
  await updateDoc(doc(db, "Items", idPeli),{
    stock: item.data().stock-cantidad,
    })
}

export default db;