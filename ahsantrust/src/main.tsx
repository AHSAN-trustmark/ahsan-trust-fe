import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProductCard from "components/ProductCard.tsx";
import Product from "pages/Products.tsx";
import AhsanTrustNews from "pages/AhsanTrustNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsDetail from "components/NewsDetail";
import { AboutUs } from "pages/AboutUs.tsx";
import {Store} from 'pages/Store.tsx'
import {Register}  from "pages/Register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<AhsanTrustNews />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/store/:id" element={< Store/>} />
        <Route path="/register" element={< Register/>} />
      </Routes>
    </Router>
  </StrictMode>
);
