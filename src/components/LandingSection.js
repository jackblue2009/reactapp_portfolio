import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Abdulrahman!";
const bio1 = "A Frontend Developer";
const bio2 = "A Video Games Programmer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar src="https://i.imgur.com/Okueygv.jpeg" boxSize='200px' name="Abdulrahman Bucheeri" />
      <Heading as='h4' size='md' noOfLines={1}>{ greeting }</Heading>
      <VStack spacing={6}>
        <Heading>{ bio1 }</Heading>
        <Heading>{ bio2 }</Heading>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
