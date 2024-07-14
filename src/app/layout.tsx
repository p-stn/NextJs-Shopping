import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/Context/store";
import { CategoryProvider } from "@/Context/categoryContext";
import { ShowProductProvider } from "@/Context/showProductContext";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/./components/Header/page"


export const metadata: Metadata = {
  title: "Digikala",
  description: "Digikala",
};
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" dir="rtl">
      <link rel="shortcut icon" href="/logoDigi.webp" type="image/x-icon" />
      <body className={inter.className}>
        <GlobalContextProvider>
          <CategoryProvider>
            <ShowProductProvider>
              {children}
            </ShowProductProvider>
          </CategoryProvider>
        </GlobalContextProvider>

      </body>
    </html>
  );
}
