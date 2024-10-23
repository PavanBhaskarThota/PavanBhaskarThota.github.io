import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import git from "../Images/Contacts/github-142-svgrepo-com (1).svg";
import linkedin from "../Images/Contacts/linkedin-svgrepo-com.svg";
import email from "../Images/Contacts/mail-surprise-svgrepo-com.svg";
import phone from "../Images/Contacts/smartphone-iphone-svgrepo-com.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);
  return (
    <Box
      w={"90%"}
      m={"auto"}
      id="contact"
      fontFamily={"sans-serif"}
      mt={"50px"}
      pt={10}
      color={theme === "dark" ? "white" : "black"}
    >
      <Heading
        mt={10}
        mb={10}
        textAlign={"center"}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="700"
      >
        Contact Me
      </Heading>
      <Flex
        w={"90%"}
        m={"auto"}
        gap={10}
        mt={10}
        mb={10}
        direction={{ base: "column-reverse", md: "row" }}
        //flexWrap={"wrap"}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="700"
      >
        <Box
          w={{ base: "100%", lg: "50%" }}
          display={{ base: "none", md: "block" }}
          p={{ base: 5, lg: 10 }}
          border="0.7px solid lightgray"
          borderRadius={"lg"}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
        >
          <Heading textAlign={"center"} size={"lg"} mb={10}>
            Write to me
          </Heading>
          <FormControl w={{ base: "100%", lg: "80%" }} m={"auto"}>
            <Input mt={3} type="email" placeholder="Your Email" />
            <Input mt={3} type="text" placeholder="Your Name" />

            <Textarea mt={3} placeholder="Write your message" />
            <Button
              m={"auto"}
              mt={5}
              display={"block"}
              bgColor={"#0a194e"}
              borderRadius={"20px"}
              w={"40%"}
              color={"white"}
            >
              Send
            </Button>
          </FormControl>
        </Box>

        <Box
          w={{ base: "100%", lg: "50%" }}
          p={{ base: 5, lg: 10 }}
          borderRadius={"lg"}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
        >
          <Heading textAlign={"center"} size={"lg"} mb={10}>
            You can Reach me to
          </Heading>
          <Flex
            w={"100%"}
            m={"auto"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
            textAlign={"center"}
            gap={4}
          >
            <Box
              w={"40%"}
              p={2}
              border="0.7px solid lightgray"
              borderRadius={"lg"}
              id="contact-github"
            >
              <Image
                src={git}
                w={"30%"}
                pb={4}
                alt="git"
                display={"block"}
                m={"auto"}
                backgroundColor='white'
                p={2}
                borderRadius={5}
                mb={5}
                mt={5}
              />
              <Link
                fontWeight={"bold"}
                href="https://github.com/PavanBhaskarThota"
                target="blank"
              >
                GitHub
              </Link>
            </Box>
            <Box
              w={"40%"}
              p={2}
              border="0.7px solid lightgray"
              borderRadius={"lg"}
              id="contact-linkedin"
            >
              <Image
                src={linkedin}
                w={"30%"}
                pb={4}
                alt="linkedin"
                display={"block"}
                m={"auto"}
                backgroundColor='white'
                p={2}
                borderRadius={5}
                mb={5}
                mt={5}
              />
              <Link
                fontWeight={"bold"}
                href="https://www.linkedin.com/in/pavan-bhaskar-thota/"
                target="blank"
              >
                LinkedIn
              </Link>
            </Box>
            <Box
              w={"40%"}
              p={2}
              border="0.7px solid lightgray"
              borderRadius={"lg"}
              id="contact-email"
            >
              <Image
                src={email}
                w={"30%"}
                pb={4}
                alt="email"
                display={"block"}
                m={"auto"}
                backgroundColor='white'
                p={2}
                borderRadius={5}
                mb={5}
                mt={5}
              />
              <Link
                fontWeight={"bold"}
                href="mailto:pavanbhaskarthota05@gmail.com"
              >
                Email
              </Link>
            </Box>

            <Box
              w={"40%"}
              p={2}
              border="0.7px solid lightgray"
              borderRadius={"lg"}
              id="contact-phone"
            >
              <Image
                src={phone}
                w={"30%"}
                pb={4}
                alt="email"
                display={"block"}
                m={"auto"}
                backgroundColor='white'
                p={2}
                borderRadius={5}
                mb={5}
                mt={5}
              />
              <Link fontWeight={"bold"} href="tel:+919515276376">
                Phone Number
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Text
        textAlign={"center"}
        mt={10}
        pb={5}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="700"
      >
        © 2023 Pavan Bhaskar Thota. All rights reserved.
      </Text>
    </Box>
  );
};
