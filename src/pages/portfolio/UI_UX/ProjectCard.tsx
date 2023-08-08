import React from "react";

function ProjectCard({ item }: any) {
  return (
    <>
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
          <img
            loading="lazy"
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>{item.description}</p>
        </figcaption>
      </figure>
    </>
  );
}

export default ProjectCard;
