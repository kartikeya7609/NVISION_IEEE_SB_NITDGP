import React from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

async function Submit(data) {
  try {
    await addDoc(collection(db, "registrations"), data);
    console.log("Submitted");
  } catch (e) {
    console.log(e);
  }
}

export default Submit;
