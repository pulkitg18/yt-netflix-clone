import Firebase from "firebase/app";
import "firebase/auth";

const firebase = Firebase.initializeApp({
  apiKey: "AIzaSyBNG2ORVnEGG16EOQI-lKLXQ7rFWdlrdWA",
  authDomain: "netflix-clone-yt-rd.firebaseapp.com",
  projectId: "netflix-clone-yt-rd",
  storageBucket: "netflix-clone-yt-rd.appspot.com",
  messagingSenderId: "82260474699",
  appId: "1:82260474699:web:53dcc74480f6136d2486ce",
});

export { firebase };
