
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar/>
        <main className="w-screen h-screen">
          {children}</main>
        <Footer/>
      </body>
    </html>
  );
}
