import "server-only"

import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import Google from "next-auth/providers/google"

import { firebase } from "./firebase"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebase.firebaseCert
  }),
  providers: [Google],
  events: {},
  callbacks: {}
})