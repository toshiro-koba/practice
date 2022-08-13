// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:            process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
  authDomain:        process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId:         process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket:     process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId:             process.env.REACT_APP_FIREBASE_CONFIG_APP_ID,
  measurementId:     process.env.REACT_APP_FIREBASE_CONFIG_MEASUREMENT_ID
};

export default firebaseConfig;
