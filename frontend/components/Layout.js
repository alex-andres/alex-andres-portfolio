import Footer from "./Footer";
import Navbar from "./Navbar";
import Spacer from "./UI-Components/Spacer";

export default function Layout({ children }) {
  return (
    <>
      <Spacer />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
