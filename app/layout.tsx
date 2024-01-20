import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarIndex from "./../components/index/NavBarIndex";
import DrawerDownContainer from "./../components/general/DrawerDownContainer";
import "material-symbols";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My checks",
  description: "App simple restaurant ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} h-svh`}>
        <NavBarIndex />
        {children}
        <DrawerDownContainer
          title={"Comandas activas"}
          icon={
            <span className="material-symbols-outlined font-semibold mr-3">
              receipt_long
            </span>
          }
        >
          Soy el hijow
        </DrawerDownContainer>
      </body>
    </html>
  );
}
