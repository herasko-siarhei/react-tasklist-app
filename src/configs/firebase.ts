import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAz25CZgrR1Ld3TL7_FL5qEKcIn_na3FYA',
    authDomain: 'react-tasklist-app.firebaseapp.com',
    projectId: 'react-tasklist-app',
    storageBucket: 'react-tasklist-app.appspot.com',
    messagingSenderId: '620316514858',
    appId: '1:620316514858:web:fd6c2e2b2939b3a2adc153'
};

const app = initializeApp(firebaseConfig);

export const firebase = {auth: getAuth(app), firestore: getFirestore(app)};