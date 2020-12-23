import Firebase from "firebase/app";
import "firebase/auth";

const firebase = Firebase.initializeApp({});

export { firebase };
