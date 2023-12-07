import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import code from "../Images/Coding.svg";
import coder from "../Images/CoderImage.jpg";
import pavan2 from "../Images/Pavan 2.jpg";
import pavan3 from "../Images/Pavan3.jpg";
import project from "../Images/project-structure.png";
import dsa from "../Images/DSA-structure.png";

export const About = () => {
  return (
    <Box mt="50px" mb="50px">
      <Heading textAlign="center" mb="30px">About</Heading>
      <Flex w="90%" m="auto" justifyContent="space-between" gap={3} >
        <Box w="50%">
          <Image src={pavan2} alt="dev logo" w="70%" borderRadius="50%" border="1px solid"mt="30px"/>
        </Box>
        <Box w="50%">
          <Flex
            w="100%"
            m="auto"
            justifyContent="space-between"
            gap={3}
            mt="50px"
            textAlign="center"
          >
            <Box
              w="35%"
              p="20px"
              borderRadius="10px"
              border="0.5px solid lightgray"
              borderColor="lightgray"
            >
              <Image
                src={code}
                alt=""
                w="25%"
                display="block"
                m="auto"
                mb="10px"
              />
              <Text fontSize="14px" mb="10px" color="black" fontWeight="bold">
                Coding
              </Text>
              <Text fontSize="12px" color="black">
                1200+ hours
              </Text>
            </Box>
            <Box
              w="35%"
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
                5+
              </Text>
            </Box>
            <Box
              w="35%"
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
              <Text fontSize="14px" mb="10px" color="black" fontWeight="bold">DSA</Text>
              <Text fontSize="12px" color="black">500+</Text>
            </Box>
          </Flex>
          <Box mt="40px">
            <Text lineHeight="30px" fontFamily="sans-serif">
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
