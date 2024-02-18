import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import code from "../Images/Coding.svg";
import coder from "../Images/CoderImage.jpg";
import pavan2 from "../Images/Pavan 2.jpg";
import pavan3 from "../Images/Pavan3.jpg";
import project from "../Images/project-structure.png";
import dsa from "../Images/DSA-structure.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);
  return (
    <Box
      width={"90%"}
      m={"auto"}
      mt="50px"
      pt={"50px"}
      mb="50px"
      id="about"
      className="about section"
      fontFamily={"sans-serif"}
    >
      <Heading
        textAlign="center"
        mb="30px"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="700"
      >
        About
      </Heading>
      <Flex
        w="90%"
        m="auto"
        justifyContent="space-between"
        gap={3}
        direction={{ base: "column", md: "row" }}
        // flexWrap={"wrap"}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          m={"auto"}
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
        >
          <Image
            src={coder}
            alt="dev image"
            w="70%"
            borderRadius="50%"
            mt="30px"
            display={"block"}
            m={"auto"}
          />
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          m={"auto"}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
        >
          <Flex
            w="100%"
            m="auto"
            justifyContent="space-between"
            gap={3}
            mt="50px"
            textAlign="center"
            //direction={{base:'column', md:'row'}}
          >
            <Box
              w="30%"
              p={{ base: 2.5, md: 5 }}
              borderRadius="10px"
              border="0.5px solid lightgray"
              borderColor="lightgray"
            >
              <Image
                src={code}
                alt=""
                w="30%"
                display="block"
                m="auto"
                mb="10px"
              />
              <Text fontSize="14px" mb="10px" color="black" fontWeight="bold">
                Coding
              </Text>
              <Text fontSize="12px" color="black">
                1200+ Hours
              </Text>
            </Box>
            <Box
              w="30%"
              p="20px"
              borderRadius="10px"
              border="0.5px solid lightgray"
              borderColor="lightgray"
            >
              <Image
                src={project}
                alt=""
                w="25%"
                display="block"
                m="auto"
                mb="10px"
              />
              <Text fontSize="14px" mb="10px" color="black" fontWeight="bold">
                Projects
              </Text>
              <Text fontSize="12px" color="black">
                4+ Completed
              </Text>
            </Box>
            <Box
              w="30%"
              p="20px"
              borderRadius="10px"
              border="0.5px solid lightgray"
              borderColor="lightgray"
            >
              <Image
                src={dsa}
                alt=""
                w="25%"
                display="block"
                m="auto"
                mb="10px"
              />
              <Text fontSize="14px" mb="10px" color="black" fontWeight="bold">
                DSA
              </Text>
              <Text fontSize="12px" color="black">
                500+ Solved
              </Text>
            </Box>
          </Flex>
          <Box mt="40px">
            <Text
              lineHeight="30px"
              fontFamily="sans-serif"
              id="user-detail-intro"
            >
              Passionate Full Stack Web Developer proficient in the MERN stack
              with over 1200 hours of coding experience. Skilled in JavaScript,
              React, and Node.js. Adept at collaborative project development and
              problem-solving. Strong expertise in HTML, CSS, Git, and Redux.
              Committed team player delivering exceptional web solutions.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
