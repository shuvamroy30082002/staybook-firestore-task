import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyACm9f_l-K4JOmNiRAuxbnkwTC25S1qnHo",
    authDomain: "staybook-firebase-task.firebaseapp.com",
    projectId: "staybook-firebase-task",
    storageBucket: "staybook-firebase-task.appspot.com",
    messagingSenderId: "194860417245",
    appId: "1:194860417245:web:ac99a7d1c338fdb8f19b34",
    measurementId: "G-RT3V5FMQWK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };