import {Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const montserrat = Montserrat({ subsets: ["latin", 'cyrillic' , 'vietnamese'] ,
weight: ['300','500'] }); 

export const metadata = {
  title: "Home",
  description: "Generate/d by create next app.ssss..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
       <Navbar/>

        {children}
      </body>
    </html>
  );
}
