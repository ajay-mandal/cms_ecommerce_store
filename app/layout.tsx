import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Shadows_Into_Light, Inter, Frijole} from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";

const shadows = Shadows_Into_Light({
  subsets: ['latin'],
  display: 'swap',
  weight:['400'],
  variable: "--shadows",
});

const frijole = Frijole({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: "--frijole"
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter'
})

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
  icons:{
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/store-dark.svg",
        href: "/store-dark.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/store-light.svg",
        href: "/store-light.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shadows.variable} ${inter.className} ${frijole.variable} antialiased `}
      >
        <ModalProvider />
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
