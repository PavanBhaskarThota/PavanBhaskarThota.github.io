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
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import hamburger from "../Images/Navbar/hamburger-menu-svgrepo-com2.svg";
import close from "../Images/Navbar/up-arrow-svgrepo-com.svg";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");
  const [activeLink, setActiveLink] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollTo = (elementId, section) => {
    scroll.scrollTo(document.getElementById(elementId).offsetTop - 60, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
    setActiveLink(elementId);
    onClose();
  };

  console.log(theme);

  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/1Jro140NnUpskgH_BB5MD1bezseLOszs_/view?usp=sharing";

    window.open(resumeLink, "_blank");
  };

  return (
    <Box
      fontFamily={"sans-serif"}
      bgColor={theme === "dark" ? "black" : "white"}
      color={theme === "dark" ? "white" : "black"}
    >
      <DIV theme={theme}>
        <Box className="pblogo" id="nav-menu" pt={5}>
          <Heading
            fontFamily={"sans-serif"}
            bgGradient={
              theme === "dark"
                ? "linear(to-r, #e4e9f5, #c3dafe)"
                : "linear(to-r, #0a194e, #97a7e1)"
            }
            // bgGradient="linear(to-r, #0a194e, #97a7e1)"
            bgClip="text"
            onClick={() => scrollTo("home")}
            cursor={"pointer"}
            mr={4}
            ml={4}
            userSelect={"none"}
          >
            Pavan
          </Heading>
        </Box>

        <Box
          w={{ base: "30%", md: "0" }}
          display={{ base: "flex", md: "none" }}
          justifyContent={"space-around"}
          pt={5}
          gap={4}
        >
          <Box h={"40px"}>
            <Icon
              fontSize="2xl"
              w={"40px"}
              h={"40px"}
              pt={2}
              color={theme === "dark" ? "white" : "black"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <CiLight /> : <MdDarkMode />}
            </Icon>
          </Box>

          <Box>
            <Icon
              fontSize="2xl"
              w={"40px"}
              h={"40px"}
              pt={2}
              onClick={onToggle}
            >
              <RxHamburgerMenu />
            </Icon>
          </Box>

          {/* <Image
            src={hamburger}
            w={"40%"}
            colorscheme="blue"
            onClick={onToggle}
            display={"block"}
            // m={"auto"}
          /> */}
        </Box>

        {/* Drawer */}

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              textAlign={"center"}
              onClick={onClose}
              bgColor={theme === "dark" ? "black" : "white"}
              color={theme === "dark" ? "white" : "black"}
            >
              <Image src={close} alt="close" display={"block"} m={"auto"} />
            </DrawerHeader>
            <DrawerBody
              textAlign={"center"}
              bgColor={theme === "dark" ? "black" : "white"}
              color={theme === "dark" ? "white" : "black"}
            >
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

        <Box
          display={{ base: "none", md: "flex" }}
          gap={10}
          alignItems="center"

          // mt={3}
        >
          <Box h={"40px"}>
            <Icon
              fontSize="2xl"
              h="100%"
              w="100%"
              pt={2}
              color={theme === "dark" ? "white" : "black"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <CiLight /> : <MdDarkMode />}
            </Icon>
          </Box>

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
        </Box>
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
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  z-index: 1;

  @media (max-width: 790px) {
    justify-content: space-between;
  }

  .active {
    color: #0391d2;
  }
`;
