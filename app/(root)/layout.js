import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/shared/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HitMix",
  description: "HitMix App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
