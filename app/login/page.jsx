"use client";
import React from "react";
import {
  providers,
  signIn,
  signOut,
  getSession,
  useSession,
  csrfToken,
} from "next-auth";
import Typography from "./../../components/general/Typography";
import GoogleSignIn from "./../../components/login/GoogleSignIn";

export default function SignIn({ providers, crsfToken }) {
  return (
    <div>
      <Typography variant="title">Inicia Session</Typography>
      <GoogleSignIn signIn={() => signIn()} />
    </div>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && req && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
