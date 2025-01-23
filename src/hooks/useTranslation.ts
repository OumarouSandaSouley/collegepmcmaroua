import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: keyof typeof translations.fr) => {
    return translations[language][key] || key;
  };

  return { t };
};
