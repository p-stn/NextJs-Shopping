import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/page"

export const metadata = {
    title: "Product",
    description: "Product",
};

export default function ProductLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div >
                <Header/>
                {children}
            </div>
        </>
    );
}
