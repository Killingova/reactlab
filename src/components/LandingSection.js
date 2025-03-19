import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A passionate frontend developer";
const bio2 = "Specialised in ⚛️ React & modern UI frameworks.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    py={32} // Mehr Padding für bessere Zentrierung
  >
    <VStack spacing={6}>
      {/* Avatar mit sanfterem Hover */}
      <Avatar
        size="2xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=7"
        shadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: "scale(1.1)" }}
      />

      {/* Begrüßung */}
      <Heading as="h1" size="xl" color="whiteAlpha.900">
        {greeting}
      </Heading>

      {/* Kurzbeschreibung */}
      <Text fontSize="lg" color="gray.300" textAlign="center">
        {bio1}
      </Text>
      <Text fontSize="lg" color="gray.300" textAlign="center">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
