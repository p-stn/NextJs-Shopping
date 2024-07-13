import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/page"

export const metadata = {
    title: "Category",
    description: "Category",
};

// export default function LoginLayout({ children }) {
export default function CategoryLayout({children,}: Readonly<{children: React.ReactNode;}>) {
// export default function CategoryLayout({ children, session, }: { children: React.ReactNode; session: never; }){
    return(
        <>
    <div >
        <Header />
        {children}
    </div>
        </>
    );
}
