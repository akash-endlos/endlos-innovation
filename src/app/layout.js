import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <title>Welcome To Endlos Innovation</title>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
