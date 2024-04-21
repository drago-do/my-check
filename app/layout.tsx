"use client";
import React, { useState, useEffect } from "react";
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
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import defaultFetcher from "@/utils/defaultFetch";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //Get the current route if is /login or /register we don't show the navbar
  const pathname = usePathname();
  const [isIndex, _] = useState(pathname === "/login" || pathname === "/");

  return (
    <html lang="es" suppressHydrationWarning={true}>
      <SWRConfig
        value={{
          fetcher: defaultFetcher,
        }}
      >
        <Provider store={store}>
          <SessionProvider>
            <body className={`${inter.className}`}>
              {!isIndex && <NavBar />}
              <Container className={"mt-10 pt-12"}>
                {!isIndex && (
                  <div className="w-full flex justify-around">
                    <BreadCrumb />
                  </div>
                )}
                <main className="flex flex-col flex-nowrap w-full px-2 pb-2 md:px-4 md:pb-4">
                  {children}
                </main>
              </Container>
              <Toaster richColors closeButton />
            </body>
          </SessionProvider>
        </Provider>
      </SWRConfig>
    </html>
  );
}
