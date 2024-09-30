import "./App.css";
import Store from "./pages/Products";
import CTA from "./pages/CTA";
import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";
import "./index.css";
import Header from "components/common/Header";
import AhsanTrustNews from "pages/AhsanTrustNews";

function App() {
  return (
    <div className="px-3">
      <Navbar />
      <Header />
      <Store />
      <AhsanTrustNews />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
