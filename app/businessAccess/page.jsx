"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Page() {
  //Get session auth from next-auth
  const { data: session, status } = useSession();
  console.log(session, status);

  return <div>business access page</div>;
}
