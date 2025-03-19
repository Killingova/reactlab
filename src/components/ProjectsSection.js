import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      py={16} // Mehr vertikaler Abstand für bessere Struktur
      px={12} // Mehr Padding für eine bessere visuelle Trennung
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" size="2xl" color="whiteAlpha.900" id="projects-section">
        Featured Projects
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Mobile = 1 Spalte, Desktop = 2 Spalten
        gridGap={10} // Größerer Abstand zwischen Projekten für bessere Lesbarkeit
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            altText={`Project: ${project.title}`} // Alt-Text für bessere Zugänglichkeit
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
