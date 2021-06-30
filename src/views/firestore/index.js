import * as app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDGEeLsHEZRYgUcSsrI7u3Td7kJdgj31IM',
  authDomain: 'ig-marketplace.firebaseapp.com',
  databaseURL: 'https://ig-marketplace.firebaseio.com',
  projectId: 'ig-marketplace',
  storageBucket: 'ig-marketplace.appspot.com',
  messagingSenderId: '501704789302',
  appId: '1:501704789302:web:8a2485d52e50f06ded7797',
  measurementId: 'G-8J7302SPHJ',
};
app.initializeApp(config);

export const firebase = app;
export const db = app.firestore();
export const auth = app.auth();

export const storageRef = app.storage().ref();
export const usersRef = db.collection('users');
export const allListingsRef = db.collection('allListings');
export const roomsRef = db.collection('chatRooms');

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp();
export const deleteDbField = firebase.firestore.FieldValue.delete();
