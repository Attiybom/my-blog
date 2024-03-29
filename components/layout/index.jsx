import Header from "components/header";
import Footer from "components/footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
