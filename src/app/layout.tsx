import "./globals.css";
import NavbarWrapper from "@/app/component/NavbarWrapper";
import Footer from "@/app/component/footer";

export const metadata = {
  title: "GlowCart",
  description: "Your favorite online store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
