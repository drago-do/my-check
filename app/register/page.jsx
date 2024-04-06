"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return <div>page</div>;
}
