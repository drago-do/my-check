import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";


//use API_URL
const API_URL = process.env.API_URL;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const fullProfile = { user, account, profile, email, credentials };
      axios.post(`${API_URL}/user/auth-user`, fullProfile).then((res) => {
        console.log(res.data);
      });
      return true;
      const response = await fetch(`${API_URL}/user/auth-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullProfile }),
      });
      console.log(response);

      const isRegistered = await response.ok; // Asume que tu API devuelve un estado 200 si el usuario está registrado

      if (isRegistered) {
        return true;
      } else {
        // El usuario no está registrado
        return false; // Continúa con el flujo de signIn para permitir la creación del JWT y la sesión
      }
    },
  },
});

export { handler as GET, handler as POST };
