import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: 'AIzaSyDt9Mk73bNje6UgcobUZH-oXhDgxm9vvrU',
  authDomain: 'wedding-invitation-a1437.firebaseapp.com',
  databaseURL: 'https://wedding-invitation-a1437-default-rtdb.firebaseio.com',
  projectId: 'wedding-invitation-a1437',
  storageBucket: 'wedding-invitation-a1437.appspot.com',
  messagingSenderId: '712106295641',
  appId: '1:712106295641:web:f2661a595657be9701cc48',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
