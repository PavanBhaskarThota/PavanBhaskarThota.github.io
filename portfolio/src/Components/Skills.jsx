import React, { useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  Image,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";

import html from "../Images/Skills/HTML.svg";
import css from "../Images/Skills/CSS.svg";
import js from "../Images/Skills/JS.svg";
import react from "../Images/Skills/React.svg";
import chakra from "../Images/Skills/icons8-chakra-ui (1).svg";
import node from "../Images/Skills/Node.svg";
import mongo from "../Images/Skills/Mongo.svg";
import express from "../Images/Skills/Express.svg";
import git from "../Images/Skills/GIT.svg";
import redux from "../Images/Skills/Redux.svg";

import Aos from "aos";
import "aos/dist/aos.css";

const frontEnd = [
  { title: "HTML5", image: html },
  { title: "CSS3", image: css },
  { title: "JavaScript", image: js },
  { title: "Git", image: git },
  { title: "React", image: react },
  { title: "Redux", image: redux },
  { title: "ChakraUI", image: chakra },
];

const backEnd = [
  { title: "Node.js", image: node },
  { title: "Express.js", image: express },
  { title: "MongoDB", image: mongo },
];

export const Skills = () => {
  const skillsPerRow = useBreakpointValue({ base: 3, md: 4, lg: 5 });

  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);

  return (
    <Box
      id="skills"
      w={{ base: "90%", md: "90%", lg: "70%" }}
      margin="auto"
      mt={10}
      pt={"50px"}
      fontFamily={"sans-serif"}
    >
      <Text
        fontSize={"4xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={6}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Skills
      </Text>

      <Text
        fontSize={"2xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={6}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        FrontEnd
      </Text>

      <Grid
        templateColumns={`repeat(${skillsPerRow}, 1fr)`}
        gap={{ base: 3, md: 5, lg: 7 }}
        justifyContent="space-between"
        p={5}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {frontEnd.map((skill, index) => (
          <FrontEnd key={index} title={skill.title} image={skill.image} />
        ))}
      </Grid>

      <Text
        fontSize={"2xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={6}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        BackEnd
      </Text>

      <Grid
        templateColumns={`repeat(${skillsPerRow}, 1fr)`}
        gap={{ base: 3, md: 5, lg: 7 }}
        justifyContent="space-between"
        p={5}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {backEnd.map((skill, index) => (
          <BackEnd key={index} title={skill.title} image={skill.image} />
        ))}
      </Grid>
    </Box>
  );
};

const FrontEnd = ({ title, image }) => {
  return (
    <VStack
      align="center"
      border="0.5px solid lightgray"
      borderRadius="lg"
      className="skills-card"
    >
      <Image
        className="skills-card-img"
        src={image}
        alt={title}
        boxSize={{ base: "30px", md: "50px" }}
        mt={{ base: 3, md: 7 }}
      />
      <Text
        className="skills-card-name"
        mt={{ base: 1, md: 3 }}
        mb={{ base: 1, md: 3 }}
        fontSize={{ base: "10px", md: "md" }}
        fontFamily={"Poppins, sans-serif"}
      >
        {title}
      </Text>
    </VStack>
  );
};

const BackEnd = ({ title, image }) => {
  return (
    <VStack align="center" border="0.5px solid lightgray" borderRadius="lg">
      <Image
        className="skills-card-img"
        src={image}
        alt={title}
        boxSize={{ base: "30px", md: "50px" }}
        mt={{ base: 3, md: 7 }}
      />
      <Text
        className="skills-card-name"
        mt={{ base: 1, md: 3 }}
        mb={{ base: 1, md: 3 }}
        fontSize={{ base: "10px", md: "md" }}
        fontFamily={"Poppins, sans-serif"}
      >
        {title}
      </Text>
    </VStack>
  );
};
