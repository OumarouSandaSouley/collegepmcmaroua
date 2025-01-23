import type React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Sections from "./pages/Sections";
import Facilities from "./pages/Facilities";
import { LanguageProvider } from "./contexts/LanguageContext";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-background text-text">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sections" element={<Sections />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
