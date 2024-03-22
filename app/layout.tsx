"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./../redux/store";
import "material-symbols";
import { Toaster } from "sonner";
import NavBar from "./../components/general/NavBar";
import Container from "./../components/general/Container";
import BreadCrumb from "./../components/general/BreadCrumb";

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
            <main className="flex flex-col flex-nowrap w-full px-2 pb-2 md:px-4 md:pb-4">
              {children}
            </main>
          </Container>
          <Toaster richColors closeButton />
        </body>
      </Provider>
    </html>
  );
}
