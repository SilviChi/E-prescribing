// Initialize Firebase
  let firebaseModule = (function() {
  var config = {
    apiKey: "AIzaSyADFNOrhTSnX1ajmWgG2En0dxax80BiY5k",
    authDomain: "e-prescribing.firebaseapp.com",
    databaseURL: "https://e-prescribing.firebaseio.com",
    projectId: "e-prescribing",
    storageBucket: "e-prescribing.appspot.com",
    messagingSenderId: "719025727621"
  };
  firebase.initializeApp(config);
  })();
  export default firebaseModule;
  
