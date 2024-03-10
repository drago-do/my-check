"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./../redux/store";
import "material-symbols";
import { Toaster, toast } from "sonner";

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
          {children}
          <Toaster richColors closeButton />
        </body>
      </Provider>
    </html>
  );
}
