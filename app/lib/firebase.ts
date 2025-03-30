import "server-only"

import { cert, getApps, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getStorage } from "firebase-admin/storage"

import { env } from "../env/index"

const firebaseCert = cert({
  clientEmail: env.FIREBASE_CLIENT_EMAIL,
  privateKey: JSON.parse(env.FIREBASE_PRIVATE_KEY),
  projectId: env.FIREBASE_PROJECT_ID
})

if(getApps().length === 0) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  })
}

export const firebase = {
  firebaseCert,
  db: getFirestore(),
  storage: getStorage().bucket()
}