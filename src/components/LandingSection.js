import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1E3A5F" // Exakte Farbe aus dem Screenshot
    py={32} // Mehr Padding für perfekte Zentrierung
  >
    <VStack spacing={6}>
      {/* Avatar mit weißem Rand & Hover-Effekt */}
      <Avatar
        size="2xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=7"
        border="4px solid white" // Weißer Rand für Kontrast
        shadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: "scale(1.1)" }} // Sanfte Vergrößerung beim Hover
      />

      {/* Begrüßung kleiner & grauer */}
      <Text fontSize="md" color="gray.300" fontWeight="bold">
        {greeting}
      </Text>

      {/* Hauptüberschrift größer & mittig */}
      <Heading as="h1" size="2xl" color="white" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h1" size="2xl" color="white" textAlign="center">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
