import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  Link as ChakraLink,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import hamburger from "../Images/Navbar/hamburger-menu-svgrepo-com2.svg";
import close from "../Images/Navbar/up-arrow-svgrepo-com.svg";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");
  const [activeLink, setActiveLink] = useState("home");

  const scrollTo = (elementId, section) => {
    scroll.scrollTo(document.getElementById(elementId).offsetTop - 60, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
    setActiveLink(elementId);
    onClose();
  };

  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/14XxFxDJlsIPQgYlB5G5NN4YsEnwyeNiJ/view?usp=sharing"; // Replace with your actual Google Drive link
    window.open(resumeLink, "_blank");
  };

  // https://drive.google.com/file/d/18BO9iV2epsTE5vUC8ZsScPTTDwV6txQp/view?usp=sharing

  return (
    <Box bgColor={"white"} fontFamily={"sans-serif"}>
      <DIV>
        <Box
          //display={{ base: "none", md: "inline" }}
          className="pblogo"
          id="nav-menu"
          pt={5}
        >
          <Heading
            fontFamily={"sans-serif"}
            bgGradient="linear(to-r, #0a194e, #97a7e1)"
            bgClip="text"
            onClick={() => scrollTo("home")}
            cursor={"pointer"}
            //display={{ base: "none", md: "inline" }}
            mr={4}
            ml={4}
            userSelect={"none"}
          >
            Pavan
          </Heading>
        </Box>

        <Box
          w={{ base: "20%", md: "0" }}
          display={{ base: "block", md: "none" }}
          pt={5}
        >
          {" "}
          <Image
            src={hamburger}
            w={"50%"}
            colorscheme="blue"
            onClick={onToggle}
            display={"block"}
            m={"auto"}
          />
        </Box>

        {/* Drawer */}

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              textAlign={"center"}
              onClick={onClose}
              // color={"red"}
            >
              <Image src={close} alt="close" display={"block"} m={"auto"} />
            </DrawerHeader>
            <DrawerBody textAlign={"center"}>
              <Flex direction={"column"}>
                <ChakraLink
                  className={`nav-link home ${
                    activeLink === "home" && "active"
                  }`}
                  onClick={() => scrollTo("home")}
                  textDecoration={"none"}
                  mt={5}
                  mb={5}
                  fontSize={"22px"}
                  letterSpacing={1}
                  _hover={{ textDecoration: "none" }}
                >
                  Home
                </ChakraLink>
                <ChakraLink
                  className={`nav-link about ${
                    activeLink === "about" && "active"
                  }`}
                  onClick={() => scrollTo("about")}
                  textDecoration={"none"}
                  mt={5}
                  mb={5}
                  fontSize={"22px"}
                  letterSpacing={1}
                  _hover={{ textDecoration: "none" }}
                >
                  About
                </ChakraLink>
                <ChakraLink
                  className={`nav-link skills ${
                    activeLink === "skills" && "active"
                  }`}
                  onClick={() => scrollTo("skills")}
                  textDecoration={"none"}
                  mt={5}
                  mb={5}
                  fontSize={"22px"}
                  letterSpacing={1}
                  _hover={{ textDecoration: "none" }}
                >
                  Skills
                </ChakraLink>
                <ChakraLink
                  className={`nav-link projects ${
                    activeLink === "projects" && "active"
                  }`}
                  onClick={() => scrollTo("projects")}
                  textDecoration={"none"}
                  mt={5}
                  mb={5}
                  fontSize={"22px"}
                  letterSpacing={1}
                  _hover={{ textDecoration: "none" }}
                >
                  Projects
                </ChakraLink>
                <ChakraLink
                  className={`nav-link contact ${
                    activeLink === "contact" && "active"
                  }`}
                  onClick={() => scrollTo("contact")}
                  textDecoration={"none"}
                  mt={5}
                  mb={5}
                  fontSize={"22px"}
                  letterSpacing={1}
                  _hover={{ textDecoration: "none" }}
                >
                  Contact
                </ChakraLink>

                <Button
                  bgColor={"#0a194e"}
                  color={"white"}
                  m={"auto"}
                  mb={5}
                  mt={5}
                  w={"50%"}
                  borderRadius={20}
                  display={"block"}
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
                  >
                    Resume
                  </ChakraLink>
                </Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Flex
          display={{ base: "none", md: "flex" }}
          w={"40%"}
          justifyContent={"space-around"}
          pt={5}
          gap={5}
        >
          <ChakraLink
            className={`nav-link home ${activeLink === "home" && "active"}`}
            onClick={() => scrollTo("home")}
            fontSize={"18px"}
            _hover={{ textDecoration: "none" }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            className={`nav-link about ${activeLink === "about" && "active"}`}
            onClick={() => scrollTo("about")}
            fontSize={"18px"}
            _hover={{ textDecoration: "none" }}
          >
            About
          </ChakraLink>
          <ChakraLink
            className={`nav-link skills ${activeLink === "skills" && "active"}`}
            onClick={() => scrollTo("skills")}
            fontSize={"18px"}
            _hover={{ textDecoration: "none" }}
          >
            Skills
          </ChakraLink>
          <ChakraLink
            className={`nav-link projects ${
              activeLink === "projects" && "active"
            }`}
            onClick={() => scrollTo("projects")}
            fontSize={"18px"}
            _hover={{ textDecoration: "none" }}
          >
            Projects
          </ChakraLink>
          <ChakraLink
            className={`nav-link contact ${
              activeLink === "contact" && "active"
            }`}
            onClick={() => scrollTo("contact")}
            fontSize={"18px"}
            _hover={{ textDecoration: "none" }}
          >
            Contact
          </ChakraLink>
        </Flex>

        <Button
          bgColor={"#0a194e"}
          color={"white"}
          mb={3}
          mr={3}
          mt={5}
          display={{ base: "none", md: "inline" }}
          onClick={downloadResume}
          borderRadius={"30px"}
          _hover={{
            backgroundColor: "#ffffff",
            color: "#0a194e",
            border: "1px solid #0a194e",
          }}
        >
          <ChakraLink
            as={RouterLink}
            id="resume-button-1"
            className="nav-link resume"
            to="https://drive.google.com/uc?export=download&id=14XxFxDJlsIPQgYlB5G5NN4YsEnwyeNiJ"
          >
            Resume
          </ChakraLink>
        </Button>
      </DIV>
    </Box>
  );
};

const DIV = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  position: fixed;
  background-color: white;
  z-index: 1;

  @media (max-width: 790px) {
    justify-content: space-between;
    /* width: 85%;
    margin: auto; */
  }

  .active {
    color: #5d0d1db6;
  }
`;
