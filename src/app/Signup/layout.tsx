import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup",
};

export default function SignupLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
        {children}
    </div>
  );
}
