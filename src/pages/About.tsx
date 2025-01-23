import React from "react";
import { Medal, Users, BookOpen, GraduationCap } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";


const StatCard: React.FC<{
  Icon: React.ElementType;
  value: string;
  label: string;
}> = ({ Icon, value, label }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
      <Icon className="w-10 h-10 text-primary" />
    </div>
    <h3 className="text-3xl font-bold text-primary mb-2">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-primary mb-6">
            CPBPMC Maroua
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("aboutTitle")}
          </p>
        </section>

        {/* Key Stats */}
        <section className="grid md:grid-cols-4 gap-6 mb-16">
          <StatCard
            Icon={GraduationCap}
            value="8+"
            label={t("yearsOfExcellence")}
          />
          <StatCard Icon={Users} value="500+" label={t("students")} />
          <StatCard Icon={BookOpen} value="2" label={t("linguisticSections")} />
          <StatCard Icon={Medal} value="95%" label={t("successRate")} />
        </section>

        {/* Our Story */}
        <section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              {t("ourHistory")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t("story1")}</p>
            <p className="text-gray-700 leading-relaxed">{t("story2")}</p>
          </div>
          <img
            src="/image.jpg"
            alt="École CPBPMC Maroua"
            className="rounded-lg shadow-lg"
          />
        </section>

        {/* Mission */}
        <section className="bg-white rounded-lg shadow-md p-12 mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            {t("ourMissionTitle")}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t("ouMissionDesc")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
