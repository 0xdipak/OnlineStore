import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Online Store",
  description: "online store with each and everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
