import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCZCq1koheTdFUJrkbAVCdJd1k-OXc46ZI",
  authDomain: "c-71-85437.firebaseapp.com",
  projectId: "c-71-85437",
  storageBucket: "c-71-85437.appspot.com",
  messagingSenderId: "532333972409",
  appId: "1:532333972409:web:280b53b4104574671b8468"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
