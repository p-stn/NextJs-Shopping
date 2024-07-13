import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function LoginLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
        {children}
    </div>
  );
}
