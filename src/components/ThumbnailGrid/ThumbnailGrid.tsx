import React from "react";
import { motion } from "framer-motion";

interface ThumbnailProps {
  image: string;
  label: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ image, label }) => {
  const labelPath = `/portfolio/${label.toLowerCase().replace(/ /g, "_")}`;

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      onClick={() => (window.location.href = labelPath)}
      style={{ cursor: "pointer" }}
    >
      <div className="relative">
        <img loading="lazy" src={image} alt="Thumbnail" className="rounded-lg w-40 h-40 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-white font-bold text-lg">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const ThumbnailGrid: React.FC = () => {
  const images: { src: string; label: string }[] = [
    { src: "/Code/images/Coding.png", label: "Code" },
    { src: "/UI-UX/images/TravelWebsite.png", label: "UI-UX" },
    { src: "/ArtCatalog/Akira.jpg", label: "Illustration" },
    { src: "/ArchCatalog/4.jpg", label: "Architecture" },
    // Add more image URLs and labels here
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Thumbnail image={image.src} label={image.label} />
          </div>
        ))}
      </div>
    </div>
  );
};
