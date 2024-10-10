import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer  from "@/components/Footer/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.0/dist/css/bootstrap.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
      <body className={inter.className}>
        <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
