import type React from "react";
import { useTranslation } from "../hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; 2023 Collège Privé Bilingue Pierre et Marie Curie de Maroua.{" "}
          {t("copyright")}
        </p>
        <a
          href="#"
          className="text-secondary hover:underline mt-2 inline-block"
        >
          {t("parentSpace")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
