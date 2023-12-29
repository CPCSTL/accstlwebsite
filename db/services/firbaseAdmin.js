// services/firebaseAdmin.js
import admin from 'firebase-admin';
import 'dotenv/config';

let firebaseApp;

export const initializeFirebaseAdmin = () => {
  if (!firebaseApp) {
    const serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    };

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET // Optional for Firebase Storage
    });
  }
  return firebaseApp;
};
