 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAucuJTK8S1sYuqNR6ktsodgiX40-X731w",
    authDomain: "react-redux-firestore-app.firebaseapp.com",
    databaseURL: "https://react-redux-firestore-app.firebaseio.com",
    projectId: "react-redux-firestore-app",
    storageBucket: "react-redux-firestore-app.appspot.com",
    messagingSenderId: "792913611364",
    appId: "1:792913611364:web:6dc30ad1a458dd90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;