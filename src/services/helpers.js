// import { products } from "../asyncMock";
import { initializeApp } from "firebase/app";

import { addDoc, getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3bm0qzuNde2EW2jtKTOYvHPr3lwI6ckQ",
  authDomain: "react43210-project.firebaseapp.com",
  projectId: "react43210-project",
  storageBucket: "react43210-project.appspot.com",
  messagingSenderId: "40597849421",
  appId: "1:40597849421:web:c450bffc128cf42b6b2304",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Boton para exportar los products
export async function exportData() {
  const productsCollectionRef = collection(db, "products");
  for (let item of products) {
    const res = await addDoc(productsCollectionRef, item);
    console.log("DOCUMENTO CREADO --->", res.id);
  }
}
