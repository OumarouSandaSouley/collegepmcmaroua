import type React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  UserCheck,
  Trophy,
} from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import About from "./About";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <About />
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] bg-hero bg-cover bg-center flex flex-col items-center justify-center px-4 py-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {t("welcomeMessage")}
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <span className="flex items-center text-lg text-white bg-primary bg-opacity-75 px-4 py-2 rounded-full">
            <GraduationCap className="mr-2" size={24} />
            {t("bilingualEducation")}
          </span>
          <span className="flex items-center text-lg text-white bg-secondary bg-opacity-75 px-4 py-2 rounded-full">
            <BookOpen className="mr-2" size={24} />
            {t("modernComputerLab")}
          </span>
          <span className="flex items-center text-lg text-white bg-yellow-600 bg-opacity-75 px-4 py-2 rounded-full">
            <Award className="mr-2" size={24} />
            {t("wellStockedLibrary")}
          </span>
        </div>
        <Link
          to="/dashboard/parents"
          className="inline-block px-6 py-3 rounded-md bg-primary text-white text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg mb-12"
        >
          {t("parentSpace")}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <Trophy className="text-yellow-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{t("examResults")}</h3>
            <p className="text-3xl font-bold text-primary">95%</p>
            <p className="text-gray-600">{t("successRate")}</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <UserCheck className="text-secondary w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{t("teachingStaff")}</h3>
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="text-gray-600">{t("qualifiedTeachers")}</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <Users className="text-primary w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{t("studentBody")}</h3>
            <p className="text-3xl font-bold text-primary">300+</p>
            <p className="text-gray-600">{t("enrolledStudents")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("ourStrengths")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<GraduationCap className="w-12 h-12 text-primary" />}
            title={t("bilingualEducation")}
            description={t("bilingualEducationDesc")}
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-secondary" />}
            title={t("wellStockedLibrary")}
            description={t("libraryDesc")}
          />
          <FeatureCard
            icon={<Award className="w-12 h-12 text-yellow-500" />}
            title={t("modernComputerLab")}
            description={t("computerLabDesc")}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;
