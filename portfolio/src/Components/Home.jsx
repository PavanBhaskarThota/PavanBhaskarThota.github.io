import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import pavan from "../Images/Pavan.jpg";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/1Jro140NnUpskgH_BB5MD1bezseLOszs_/view?usp=sharing";
    window.open(resumeLink, "_blank");
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
    });
    Aos.refresh();
  }, []);

  return (
    <Flex
      w="85%"
      m="auto"
      justifyContent="space-between"
      gap={3}
      pt={{ base: "150px", md: "200px" }}
      mb="100px"
      id="home"
      direction={{ base: "column", md: "row" }}
      fontFamily={"sans-serif"}
      color={theme === "dark" ? "white" : "transparent"}
    >
      <Box w={{ base: "100%", md: "50%" }} m={"auto"}>
        <Heading
          fontFamily={"sans-serif"}
          bgGradient={
            theme === "dark"
              ? "linear(to-r, #e4e9f5, #c3dafe)"
              : "linear(to-r, #0a194e, #97a7e1)"
          }
          bgClip="text"
          color="transparent"
        >
          Hi,
        </Heading>
        <Heading
          bgGradient={
            theme === "dark"
              ? "linear(to-r, #e4e9f5, #c3dafe)"
              : "linear(to-r, #0a194e, #97a7e1)"
          }
          bgClip="text"
          color="transparent"
          as="h1"
          size="xl"
        >
          My name is Pavan Bhaskar
        </Heading>
        <Heading
          bgGradient={
            theme === "dark"
              ? "linear(to-r, #e4e9f5, #c3dafe)"
              : "linear(to-r, #0a194e, #97a7e1)"
          }
          bgClip="text"
          color="transparent"
          as="h1"
          size="xl"
        >
          <MERN>
            <div className="loading">
              <span>MERN Developer</span>
            </div>
          </MERN>
        </Heading>
        <Text
          fontSize="lg"
          mt="20px"
          id="user-detail-name"
          color={theme === "dark" ? "white" : "black"}
        >
          I like to craft solid and scalable{" "}
          <span style={{ fontWeight: "bold", letterSpacing: "2px" }}>MERN</span>{" "}
          products with great user experiences.
        </Text>
        <Button
          bgColor={"#0a194e"}
          color={"white"}
          mb={3}
          mr={3}
          mt={5}
          borderRadius={20}
          id="resume-button-2"
          onClick={downloadResume}
          _hover={{
            backgroundColor: "#ffffff",
            color: "#0a194e",
            border: "1px solid #0a194e",
          }}
        >
          <ChakraLink
            as={RouterLink}
            to="https://drive.google.com/uc?export=download&id=14XxFxDJlsIPQgYlB5G5NN4YsEnwyeNiJ"
            textDecoration={"none"}
          >
            Resume
          </ChakraLink>
        </Button>
      </Box>

      <Box
        w={{ base: "100%", md: "50%" }}
        m={"auto"}
        borderimage="linear-gradient(to right, rgba(0,0,0,0.3), #000)"
      >
        <Image
          className="home-img"
          display="block"
          m="auto"
          borderRadius="50%"
          border="1px solid lightgray"
          w={{ base: "70%", md: "70%" }}
          src={pavan}
          alt="pavan"
          mt={{ base: "30px" }}
        />
      </Box>
    </Flex>
  );
};

const MERN = styled.div`
  .loading {
    font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
    text-transform: uppercase;
    width: 100%;
    line-height: 50px;
    left: 0;
    right: 0;
    top: 50%;
    margin: auto;
    transform: translateY(-0%);
  }

  .loading span {
    position: relative;
    z-index: 999;
    background: linear-gradient(90deg, #97a7e1 28.55%, #0a194e 99.82%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
