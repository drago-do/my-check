"use client";
import React from "react";
import NavBarIndex from "@/components/general/NavBar";
import Container from "@/components/general/Container";
import BreadCrumb from "@/components/general/BreadCrumb";
import SwipeDrawer from "@/components/general/SwipeDrawer";
import MaterialIcon from "@/components/general/MaterialIcon";

export default function layout({ children }) {
  return (
    <>
      <NavBarIndex />
      <Container>
        <div className="w-full flex justify-around">
          <BreadCrumb />
        </div>
        <main className="flex items-start w-full px-2 py-2 md:px-4 md:py-4">
          {children}
          <SwipeDrawer
            title={
              <>
                <MaterialIcon iconName="order_approve" /> Orden actual
              </>
            }
          >
            no content
          </SwipeDrawer>
        </main>
      </Container>
    </>
  );
}
