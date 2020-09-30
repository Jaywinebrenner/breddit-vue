import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAAgHiFQjZ1S_CCm24Sf4DCCYDf43-COHg',
  authDomain: 'breddit-vue.firebaseapp.com',
  databaseURL: 'https://breddit-vue.firebaseio.com',
  projectId: 'breddit-vue',
  storageBucket: 'breddit-vue.appspot.com',
  messagingSenderId: '981621910404',
  appId: '1:981621910404:web:6dd811d591faf6b70b8bd1',
  measurementId: 'G-GRSET75X9J',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
