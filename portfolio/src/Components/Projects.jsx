import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import edukin from "../Images/Projects/Edukin.png";
import tripwiz from "../Images/Projects/Tripwiz.png";
import freshBasket from "../Images/Projects/FreshBasket.png";
import manakin from "../Images/Projects/Mankin.png";

const project = [
  {
    title: "Edukin",
    image: edukin,
    description: "Created a Frontend project",
    techStack: ["HTML", "CSS", "JS"],
    gitLink: "https://github.com/PavanBhaskarThota/potent-toothbrush-7925",
    projectLink: "https://dreamy-vacherin-64e712.netlify.app/",
  },
  {
    title: "TripWiz",
    image: tripwiz,
    description: "Created Collabrative a Frontend project",
    techStack: ["HTML", "CSS", "JS", "React", "Redux"],
    gitLink: "https://github.com/adilrza0/adaptable-oven-8035",
    projectLink: "https://tripwiz-vs39.vercel.app/",
  },
  {
    title: "FreshBasket",
    image: freshBasket,
    description: "Created Collabrative a Frontend project",
    techStack: ["HTML", "CSS", "JS", "React", "Redux"],
    gitLink: "https://github.com/Sonika2223Kanojia/tart-clover-1298",
    projectLink: "https://freshbasket.vercel.app/",
  },
  {
    title: "Manakin",
    image: manakin,
    description: "Created a Frontend project",
    techStack: ["HTML", "CSS", "React"],
    gitLink: "https://github.com/PavanBhaskarThota/manakin",
    projectLink: "https://manakin-3syl.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <Box w="70%" m={"auto"}>
      <Heading
        fontSize={"4xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={10}
        mt={10}
      >
        Projects
      </Heading>

      <Grid
        templateColumns={`repeat(2, 1fr)`}
        gap={{ base: 3, md: 5, lg: 7 }}
        justifyContent="space-between"
        p={5}
      >
        {project.map((el, index) => (
          <ProjectCard key={index} {...el} />
        ))}
      </Grid>
    </Box>
  );
};

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  gitLink,
  projectLink,
}) => {
  return (
    <VStack align="left" border="0.5px solid lightgray" borderRadius="lg" p={4}>
      <Image
        className="skills-card-img"
        src={image}
        alt={title}
        boxSize={{ base: "30px", md: "100%" }}
        borderRadiusTop="lg"
        borderTopRadius={"lg"}
      />
      <Heading
        className="skills-card-name"
        fontSize={{ base: "10px", md: "md" }}
        fontFamily={"Poppins, sans-serif"}
      >
        {title}
      </Heading>
      <Text
        className="skills-card-name"
        fontSize={{ base: "10px", md: "md" }}
        fontFamily={"Poppins, sans-serif"}
      >
        {description}
      </Text>

      <Flex gap={3}>
        {techStack.map((el, index) => (
          <Text>{el} |</Text>
        ))}
      </Flex>

      <Flex width={"40%"} justifyContent={"space-between"}>
        <Button>
          <Link href={gitLink} target="blank">
            Git
          </Link>
        </Button>
        <Button>
          <Link href={projectLink} target="blank">
            Live
          </Link>
        </Button>
      </Flex>
    </VStack>
  );
};
