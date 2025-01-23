import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import {
  Book,
  GraduationCap,
  Globe,
  FileText,
  Calculator,
  Microscope,
} from "lucide-react";

const SectionCard: React.FC<{
  title: string;
  description: string;
  levels: string[];
  icon: React.ElementType;
  color: string;
}> = ({ title, description, levels, icon: Icon, color }) => {
  const [isExpanded, setIsExpanded] = useState(false);
   const { t } = useTranslation();
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 border-l-4 ${color}`}
    >
      <div className="flex items-center mb-4">
        <div className={`mr-4 ${color.replace("border-", "text-")}`}>
          <Icon size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-2 mt-4">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded px-3 py-1 text-sm text-gray-700 flex items-center"
            >
              <GraduationCap size={16} className="mr-2 text-primary" />
              {level}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 w-full text-primary hover:bg-primary/10 rounded py-2 transition-colors"
      >
        {isExpanded ? t("reduire") : t("seeAvailableClasses")}
      </button>
    </div>
  );
};

const Sections: React.FC = () => {
  const { t } = useTranslation();

  const sectionData = [
    {
      title: t("francophoneSection"),
      description: t("francophoneSectionDesc"),
      levels: [
        "6e",
        "5e",
        "4e",
        "3e",
        "2nde A (Littéraire)",
        "2nde C (Scientifique)",
      ],
      icon: Book,
      color: "border-blue-500",
    },
    {
      title: t("anglophoneSection"),
      description: t("anglophoneSectionDesc"),
      levels: ["Form 1", "Form 2", "Form 3", "Form 4", "Form 5"],
      icon: Globe,
      color: "border-green-500",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-primary mb-4">
            {t("sections")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("sectionsDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sectionData.map((section, index) => (
            <SectionCard
              key={index}
              title={section.title}
              description={section.description}
              levels={section.levels}
              icon={section.icon}
              color={section.color}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">
            {t("ourPedagogy")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Microscope size={50} className="text-primary mb-4" />
              <h4 className="font-semibold mb-2">{t("method1Title")}</h4>
              <p className="text-gray-600 text-center">{t("method1Desc")}</p>
            </div>
            <div className="flex flex-col items-center">
              <FileText size={50} className="text-primary mb-4" />
              <h4 className="font-semibold mb-2">{t("method2Title")}</h4>
              <p className="text-gray-600 text-center">{t("method2Desc")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Calculator size={50} className="text-primary mb-4" />
              <h4 className="font-semibold mb-2">{t("method3Title")}</h4>
              <p className="text-gray-600 text-center">{t("method3Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
