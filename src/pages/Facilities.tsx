import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import {
  Computer,
  Book,
  Newspaper,
} from "lucide-react";

const FacilityCard: React.FC<{
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}> = ({ title, description, image, icon: Icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-neutral-400/50">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <div className="absolute top-4 left-4 bg-primary/80 rounded-full p-3">
            <Icon className="text-white" size={30} />
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors"
          >
            {t("seeMore")}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-primary">{title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-primary"
              >
                {t("close")}
              </button>
            </div>
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

const Facilities: React.FC = () => {
  const { t } = useTranslation();

  const facilitiesData = [
    {
      title: t("computerLab"),
      description: t("computerLabDesc1"),
      image: "/cover.jpg",
      icon: Computer,
    },
    {
      title: t("library"),
      description: t("libraryDesc1"),
      image: "/cover.jpg",
      icon: Book,
    },
    {
      title: t("facilyTitle"),
      description: t("facilityDesc"),
      image: "/cover.jpg",
      icon: Newspaper,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-primary mb-4">
            {t("facilities")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("facilitiesDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => (
            <FacilityCard
              key={index}
              title={facility.title}
              description={facility.description}
              image={facility.image}
              icon={facility.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
