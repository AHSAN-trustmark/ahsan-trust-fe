import "./App.css";
import Store from "./pages/Stores";
import CTA from "./pages/CTA";
import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";
import "./index.css";
import Header from "components/common/Header";

function App() {
  return (
    <div className="px-3">
      <Navbar />
      <Header />
      <Store />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
