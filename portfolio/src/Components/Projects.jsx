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
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import edukin from "../Images/Projects/Edukin.png";
import tripwiz from "../Images/Projects/Tripwiz.png";
import freshBasket from "../Images/Projects/FreshBasket.png";
import Aspireo from "../Images/Projects/Aspireo_Home.1.png";
import manakin from "../Images/Projects/Mankin.png";
import funiro from "../Images/Projects/Funiro.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const project = [
  {
    title: "Edukin",
    image: edukin,
    description: "Created a Solo Frontend project",
    techStack: ["HTML", "CSS", "JS"],
    gitLink: "https://github.com/PavanBhaskarThota/potent-toothbrush-7925",
    projectLink: "https://dreamy-vacherin-64e712.netlify.app/",
  },
  {
    title: "TripWiz",
    image: tripwiz,
    description: "Created a Collabrative Frontend project",
    techStack: ["HTML", "CSS", "JS", "React", "Redux"],
    gitLink: "https://github.com/adilrza0/adaptable-oven-8035",
    projectLink: "https://tripwiz-vs39.vercel.app/",
  },
  {
    title: "FreshBasket",
    image: freshBasket,
    description: "Created a Collabrative Frontend project",
    techStack: ["HTML", "CSS", "JS", "React", "Redux"],
    gitLink: "https://github.com/Sonika2223Kanojia/tart-clover-1298",
    projectLink: "https://freshbasket.vercel.app/",
  },
  {
    title: "Manakin",
    image: manakin,
    description: "Created a Solo Frontend project",
    techStack: ["HTML", "CSS", "React"],
    gitLink: "https://github.com/PavanBhaskarThota/manakin",
    projectLink: "https://manakin-3syl.vercel.app/",
  },
  {
    title: "Funiro",
    image: funiro,
    description: "Created a Frontend project",
    techStack: ["HTML", "CSS", "React", "Figma"],
    gitLink: "https://github.com/PavanBhaskarThota/Furniro",
    projectLink: "https://furniro-seven.vercel.app/",
  },
  {
    title: "Aspireo",
    image: Aspireo,
    description: "Created Collabrative MERN Stack project",
    techStack: ["Express.js", "MongoDb", "React", "Node.js"],
    gitLink: "https://github.com/PavanBhaskarThota/Aspireo",
    projectLink: "https://aspireo.vercel.app/",
  },
];

export const Projects = () => {
  const projectsPerRow = useBreakpointValue({ base: 1, lg: 2 });
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);

  return (
    <Box
      w={{ base: "95%", md: "70%" }}
      m={"auto"}
      id="projects"
      // pt={"10px"}
      mt={"20px"}
      fontFamily={"sans-serif"}
      color={theme === "dark" ? "white" : "black"}
    >
      <Heading
        fontSize={"4xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={10}
        mt={10}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Projects
      </Heading>

      <Grid
        templateColumns={`repeat(${projectsPerRow}, 1fr)`}
        gap={{ base: 3, md: 5, lg: 7 }}
        justifyContent="space-between"
        p={5}
      >
        {project.map((el, index) => (
          <ProjectCard key={`project-${index}`} {...el} />
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
    <VStack
      align="left"
      border="0.5px solid lightgray"
      borderRadius="lg"
      p={4}
      className="project-card"
      data-aos="fade-up"
      // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="700"
    >
      <Image
        src={image}
        alt={title}
        //boxSize={{ base: "30px", md: "100%" }}
        w={{ base: "100%", md: "100%" }}
        borderTopRadius={"lg"}
      />
      <Heading
        className="project-title"
        fontSize={{ base: "21px", md: "md" }}
        letterSpacing={1.5}
        fontFamily={"Poppins, sans-serif"}
      >
        {title}
      </Heading>
      <Text
        className="project-description"
        fontSize={{ base: "18px", md: "md" }}
        fontFamily={"Poppins, sans-serif"}
      >
        {description}
      </Text>

      <Flex gap={3} className="project-tech-stack">
        {techStack.map((el, index) => (
          <Text>{el} |</Text>
        ))}
      </Flex>

      <Flex width={"60%"} gap={5}>
        <Button
          w={"40%"}
          backgroundColor={"#0a194e"}
          color={"#fff"}
          borderRadius={"30px"}
          _hover={{
            backgroundColor: "#ffff",
            color: "#0a194e",
            border: "1px solid #0a194e",
          }}
        >
          <Link href={gitLink} target="blank" className="project-github-link">
            Git
          </Link>
        </Button>
        <Button
          w={"40%"}
          backgroundColor={"#324178"}
          color={"#fff"}
          borderRadius={"30px"}
          _hover={{
            backgroundColor: "#ffff",
            color: "#324178",
            border: "1px solid #324178",
          }}
        >
          <Link
            href={projectLink}
            target="blank"
            className="project-deployed-link"
          >
            Live
          </Link>
        </Button>
      </Flex>
    </VStack>
  );
};
