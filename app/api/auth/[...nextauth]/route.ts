import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

//import env API_URL from process.env;
//import { NextResponse } from "next/server";
const API_URL = process.env.API_URL as string;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ profile }) {
      const {
        email,
        given_name: firstName,
        family_name: lastName,
        picture,
      } = profile as {
        email: string;
        given_name: string;
        family_name: string;
        picture: string;
      };
      try {
        const response = await axios.post(`${API_URL}/api/user/exist`, {
          email: email,
        });
        const {
          data: { result: isRegistered },
        } = response;
        if (isRegistered) {
          return true;
        } else {
          // El usuario no está registrado
          return `/register?email=${email}&firstName=${firstName}&lastName=${lastName}&image=${picture}`;
        }
      } catch (error) {
        console.error(error);
        return "/";
      }
    },
  },
});

export { handler as GET, handler as POST };
