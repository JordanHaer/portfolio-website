import "./styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jordan Haer",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon/favicon-16x16.png" />
        <link rel="manifest" href="%PUBLIC_URL%/favicon/site.webmanifest" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${inter.className} bg-slate-900 bg-cover bg-fixed bg-center bg-no-repeat leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
