"use client";
import React, { useEffect } from "react";

import useActualOrder from "@/hooks/useActualOrder";

export default function Test() {
  const { actualOrder } = useActualOrder();

  useEffect(() => {
    console.log(actualOrder);
  }, []);

  return (
    <>
      <p>Test</p>
    </>
  );
}
