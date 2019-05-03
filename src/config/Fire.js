import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD5DNYBry9j0aTFb7c0UQIfmxBmH06ll08",
    authDomain: "shop-246cb.firebaseapp.com",
    databaseURL: "https://shop-246cb.firebaseio.com",
    projectId: "shop-246cb",
    storageBucket: "shop-246cb.appspot.com",
    messagingSenderId: "1016834736008"
  };
const fire = firebase.initializeApp(config);
export default fire;