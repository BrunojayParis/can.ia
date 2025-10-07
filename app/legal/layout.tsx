import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}


