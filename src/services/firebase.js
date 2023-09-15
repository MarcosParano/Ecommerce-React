import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  writeBatch,
  addDoc,
} from "firebase/firestore";

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

export async function createOrder(data) {
  const orderCollectionRef = collection(db, "orders");
  const batch = writeBatch(db);

  const { items } = data;

  for (let itemOnCart of items) {
    const docRef = doc(db, "products", itemOnCart.id);
    const docSnap = await getDoc(docRef);
    const { stock } = docSnap.data();
    const stockToUpdate = stock - itemOnCart.quantity;
    if (stockToUpdate < 0) {
      throw new Error(`no quedan mas ${itemOnCart.id}`);
    } else {
      const docRef = doc(db, "products", itemOnCart.id);
      batch.update(docRef, { stock: stockToUpdate });
    }
  }

  await batch.commit();

  const response = await addDoc(orderCollectionRef, data);
  return response.id;
}
