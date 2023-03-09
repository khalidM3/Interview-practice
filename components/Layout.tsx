import TopNav from "./TopNav";
import Footer from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopNav />
      <div style={{ minHeight: "calc(100vh - 280px)" }}>{children}</div>
      <Footer />
    </>
  );
}
