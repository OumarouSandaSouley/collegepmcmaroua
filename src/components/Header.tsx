import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="CPBPMC Maroua Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <Link to="/" className="text-2xl font-bold text-primary">
              CPBPMC Maroua
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <NavItem href="/" text={t("home")} />
              <NavItem href="/about" text={t("about")} />
              <NavItem href="/sections" text={t("sections")} />
              <NavItem href="/facilities" text={t("facilities")} />
              <li>
                <LanguageSelector
                  language={language}
                  setLanguage={setLanguage}
                />
              </li>
              <ParentSpaceButton text={t("parentSpace")} isMobile={false} />
            </ul>
          </nav>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white px-4 pt-2 pb-4">
            <ul className="space-y-2">
              <MobileNavItem href="/" text={t("home")} onClick={toggleMenu} />
              <MobileNavItem
                href="/about"
                text={t("about")}
                onClick={toggleMenu}
              />
              <MobileNavItem
                href="/sections"
                text={t("sections")}
                onClick={toggleMenu}
              />
              <MobileNavItem
                href="/facilities"
                text={t("facilities")}
                onClick={toggleMenu}
              />
              <li className="py-2">
                <LanguageSelector
                  language={language}
                  setLanguage={setLanguage}
                />
              </li>
              <ParentSpaceButton text={t("parentSpace")} isMobile={true} />
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavItem: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <li>
    <Link
      to={href}
      className="text-gray-700 hover:text-primary transition duration-300"
    >
      {text}
    </Link>
  </li>
);

const MobileNavItem: React.FC<{
  href: string;
  text: string;
  onClick: () => void;
}> = ({ href, text, onClick }) => (
  <li>
    <Link
      to={href}
      className="block py-2 text-gray-700 hover:text-primary transition duration-300"
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
);

const LanguageSelector: React.FC<{
  language: string;
  setLanguage: (lang: "fr" | "en") => void;
}> = ({ language, setLanguage }) => (
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value as "fr" | "en")}
    className="bg-white text-gray-700 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
  >
    <option value="fr">FR</option>
    <option value="en">EN</option>
  </select>
);

const ParentSpaceButton: React.FC<{ text: string; isMobile?: boolean }> = ({
  text,
  isMobile = false,
}) => (
  <Link
    to="/dashboard/parents"
    className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
      isMobile ? "w-full" : ""
    }`}
  >
    {text}
  </Link>
);


export default Header;
