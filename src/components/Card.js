import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title = "Kein Titel", description, imageSrc }) => {
  return (
    <Box
      w="full" 
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      _hover={{ transform: "scale(1.05)", boxShadow: "xl", transition: "0.3s" }}
    >
      {/* Bild mit fester Höhe */}
      <Image src={imageSrc} alt={title} h="200px" objectFit="cover" w="100%" />

      <VStack align="start" spacing={4} p={6}>
        {/* Sichtbarer Titel mit dunkler Farbe */}
        <Heading size="lg" color="gray.900">
          {title}
        </Heading>

        {/* Beschreibung */}
        <Text fontSize="md" color="gray.700">
          {description}
        </Text>

        {/* Mehr erfahren Button */}
        <HStack spacing={2} align="center">
          <Text fontWeight="bold" color="blue.500">
            Mehr erfahren
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#3182CE" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
