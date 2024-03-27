import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "../../components/shared/Sidebar";

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
          <img
            src="/logo.png"
            alt="Logo"
            className="absolute inset-0 m-auto max-w-1/2 max-h-1/2 mix-blend-multiply opacity-50 z-[-1] pointer-events-none"
          />
        </div>
      </body>
    </html>
  );
}
