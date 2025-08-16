import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  fallback: ["Arial", "sans-serif"],
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ritual Roast",
  description: "Cook Up a Storm: Share Your Signature Dish!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable} font-montserrat min-h-screen flex flex-col`}
      >
        <Header />
        <main className="w-full mx-auto flex-grow">
          {children}
        </main>
        <footer className="w-full flex flex-col sm:flex-row text-[color:var(--brown-dark)]">
          <div className="flex-grow bg-[color:var(--brown-dark)]"></div>
          <div
            className="py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 text-center text-xs sm:text-sm md:text-base bg-[color:var(--gold)] font-bold"
            style={{ fontFamily: "var(--font-montserrat-alternates)" }}
          >
            Copyrights &copy; Ritual Roast Limited
          </div>
          <div className="flex-grow bg-[color:var(--brown-dark)]"></div>
        </footer>
      </body>
    </html>
  );
}
