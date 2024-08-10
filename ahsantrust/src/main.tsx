import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StoresCard from "components/StoreCard.tsx";
import Stores from "pages/Stores.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/stores/:id" element={<StoresCard />} />
      </Routes>
    </Router>
  </StrictMode>
);
