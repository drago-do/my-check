"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./../redux/store";
import "material-symbols";
import { Toaster, toast } from "sonner";
import NavBar from "./../components/general/NavBar";
import Container from "./../components/general/Container";
import BreadCrumb from "./../components/general/BreadCrumb";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { isMobile } from "react-device-detect";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Provider store={store}>
        <body className={`${inter.className}`}>
          <NavBar />
          <Container className={"mt-10 pt-12"}>
            <div className="w-full flex justify-around">
              <BreadCrumb />
            </div>
            <main className="flex flex-col flex-nowrap w-full px-2 py-2 md:px-4 md:py-4">
              <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                {children}
              </DndProvider>
            </main>
          </Container>
          <Toaster richColors closeButton />
        </body>
      </Provider>
    </html>
  );
}
