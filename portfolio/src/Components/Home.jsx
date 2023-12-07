import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import pavan from "../Images/Pavan.jpg";
import styled from "styled-components";

export const Home = () => {
  return (
    <Flex
      w="85%"
      m="auto"
      justifyContent="space-between"
      gap={3}
      pt="200px"
      mb="100px"
    >
      <Box w="50%">
        <Heading
          fontFamily={"sans-serif"}
          bgGradient="linear(to-r, #0a194e, #97a7e1)"
          bgClip="text"
          color="transparent"
        >
          Hi, my
        </Heading>
        <Heading
          bgGradient="linear(to-r, #0a194e, #97a7e1)"
          bgClip="text"
          color="transparent"
          as="h1"
          Size="4xl"
        >
          name is Pavan Bhaskar
        </Heading>
        <Heading
          bgGradient="linear(to-r, #0a194e, #97a7e1)"
          bgClip="text"
          color="transparent"
          as="h1"
          Size="4xl"
        >
          <MERN>
            <div className="loading">
              <span>MERN Developer</span>
            </div>
          </MERN>
        </Heading>
        <Text fontSize="lg" mt="20px">
          I like to craft solid and scalable{" "}
          <span style={{ fontWeight: "bold", letterSpacing: "2px" }}>MERN</span>{" "}
          products with great user experiences.
        </Text>
      </Box>

      <Box
        width="50%"
        borderImage="linear-gradient(to right, rgba(0,0,0,0.3), #000)"
      >
        <Image
          display="block"
          m="auto"
          borderRadius="50%"
          border="1px solid lightgray"
          w="70%"
          src={pavan}
          alt="pavan"
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
  } */

  /* .loading:after {
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
