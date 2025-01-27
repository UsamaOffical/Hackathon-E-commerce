import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'



// import { CartProvider } from "./cart/cartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comforty-Furniture",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <Navbar/>
        {/* <SignedOut> */}
          {/* <SignedIn> */}
        {children}
        {/* </SignedIn> */}
        {/* </SignedOut> */}
        <Footer/>
       
        
      </body>
    </html>
    // </ClerkProvider>
    
  );
}
