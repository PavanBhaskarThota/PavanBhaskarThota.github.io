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

export const Home = () => {
  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/14XxFxDJlsIPQgYlB5G5NN4YsEnwyeNiJ/view?usp=sharing"; // Replace with your actual Google Drive link
    window.open(resumeLink, "_blank");
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
    }); // Initialize AOS
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
      data-aos="fade-up"
    >
      <Box w={{ base: "100%", md: "50%" }} m={"auto"} data-aos="fade-up">
        <Heading
          fontFamily={"sans-serif"}
          bgGradient="linear(to-r, #0a194e, #97a7e1)"
          bgClip="text"
          color="transparent"

          // data-aos-anchor-placement="center-bottom"
          // data-aos-duration="700"
        >
          Hi,
        </Heading>
        <Heading
          bgGradient="linear(to-r, #0a194e, #97a7e1)"
          bgClip="text"
          color="transparent"
          as="h1"
          size="xl"
        >
          My name is Pavan Bhaskar
        </Heading>
        <Heading
          bgGradient="linear(to-r, #0a194e, #97a7e1)"
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
        <Text fontSize="lg" mt="20px" id="user-detail-name">
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
        data-aos="fade-up"
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
          data-aos="fade-up"
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
  /* .loading:before {
    content: "";
    background: #87e1d9;
    width: 230px;
    height: 36px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    margin-left: 33%;
    animation: 2.5s loadingBefore infinite ease-in-out;
  }

  @keyframes loadingBefore {
    0% {
      transform: translateX(-14px);
    }
    50% {
      transform: translateX(14px);
    }
    100% {
      transform: translateX(-14px);
    }
  }

  .loading:after {
    content: "";
    background: #00030f;
    width: 14px;
    height: 60px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.5;
    margin-left: 43%;
    animation: 2.5s loadingAfter infinite ease-in-out;
  }

  @keyframes loadingAfter {
    0% {
      transform: translateX(-100px);
    }
    50% {
      transform: translateX(1px);
    }
    100% {
      transform: translateX(-100px);
    }
  } */
`;

// export default Home;
