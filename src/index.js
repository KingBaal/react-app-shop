import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {PictureProvider} from './context'
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyD5DNYBry9j0aTFb7c0UQIfmxBmH06ll08",
//     authDomain: "shop-246cb.firebaseapp.com",
//     databaseURL: "https://shop-246cb.firebaseio.com",
//     projectId: "shop-246cb",
//     storageBucket: "shop-246cb.appspot.com",
//     messagingSenderId: "1016834736008"
//   };
// firebase.initializeApp(config);

ReactDOM.render(
  <PictureProvider>
    <Router>
      <App />
    </Router>
  </PictureProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
