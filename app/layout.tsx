import "./globals.css";
import Navbar from "@/components/Nav/Navbar";
import { ProductContextProvider } from "@/context/ProductContext";
import { Kumbh_Sans } from "@next/font/google";

export const metadata = {
  title: "Fall Limited Edition Sneakers | Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. $125.00, 50% OFF",
};

const khumbSans = Kumbh_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${khumbSans} md:overflow-auto`}>
      <body className=" max-w-[69rem] mx-auto">
        <ProductContextProvider>
          <Navbar />
          <main>{children}</main>
        </ProductContextProvider>
      </body>
    </html>
  );
}
