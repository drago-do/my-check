"use client";
import React from "react";
import NavBarIndex from "@/components/general/NavBar";
import Container from "@/components/general/Container";
import BreadCrumb from "@/components/general/BreadCrumb";
export default function layout({ children }) {
  return (
    <>
      <NavBarIndex />
      <Container>
        <div className="w-full flex justify-around">
          <BreadCrumb />
        </div>
        {children}
      </Container>
    </>
  );
}
