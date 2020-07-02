import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfCPHEa0Z3QlQAXsEC2-lGuuwQtTnVm-o",
  authDomain: "medicos-especialistas-cf87c.firebaseapp.com",
  databaseURL: "https://medicos-especialistas-cf87c.firebaseio.com",
  projectId: "medicos-especialistas-cf87c",
  storageBucket: "medicos-especialistas-cf87c.appspot.com",
  messagingSenderId: "990051364463",
  appId: "1:990051364463:web:8dc034e4127d200d62e79a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
