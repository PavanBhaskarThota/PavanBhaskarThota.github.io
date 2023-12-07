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
import React from "react";
import git from "../Images/Contacts/git-svgrepo-com.svg";
import linkedin from "../Images/Contacts/linkedin-svgrepo-com.svg";
import email from "../Images/Contacts/mail-surprise-svgrepo-com.svg";

export const Contact = () => {
  return (
    <Box w={"90%"} m={"auto"}>
      <Heading mt={10} mb={10} textAlign={"center"}>
        Contact Me
      </Heading>
      <Flex w={"90%"} m={"auto"} gap={10} mt={10} mb={10}>
        <Box
          w={"50%"}
          p={10}
          border="0.7px solid lightgray"
          borderRadius={"lg"}
        >
          <Heading textAlign={"center"} size={"lg"}>
            Write to me
          </Heading>
          <FormControl>
            <Input mt={3} type="email" placeholder="Your Email" />
            <Input mt={3} type="text" placeholder="Your Name" />

            <Textarea mt={3} placeholder="Write your message" />
            <Button m={'auto'} mt={5} display={'block'} bgColor={'#0a194e'} borderRadius={"20px"} w={'40%'} color={'white'}>Send</Button>
          </FormControl>
        </Box>
        <Box
          w={"50%"}
          p={10}
          borderRadius={"lg"}
        >
          <Heading textAlign={"center"} size={"md"} mb={10}>
            You can Reach me to
          </Heading>
          <Flex
            w={"100%"}
            m={"auto"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
            textAlign={'center'}
            gap={4}
          >
            <Box
              w={"30%"}
              p={2}
              border="0.7px solid lightgray"
              borderRadius={"lg"}
            >
              <Image src={git} w={"50%"} alt="git" display={'block'} m={'auto'}/>
              <Link href="https://github.com/PavanBhaskarThota" target="blank">
                GitHub
              </Link>
            </Box>
            <Box
              w={"30%"}
              p={2}
              border="0.7px solid lightgray"
              borderRadius={"lg"}
            >
              <Image src={linkedin} w={"50%"} alt="linkedin" display={'block'} m={'auto'}/>
              <Link
                href="https://www.linkedin.com/in/pavan-bhaskar-thota/"
                target="blank"
              >
                LinkedIn
              </Link>
            </Box>
            <Box
              w={"30%"}
              p={2}
              border="0.7px solid lightgray"
              borderRadius={"lg"}
            >
              <Image src={email} w={"50%"} alt="email" display={'block'} m={'auto'}/>
              <Link href="mailto:pavanbhaskarthota05@gmail.com">Email</Link>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Text textAlign={"center"} mt={10} mb={10}>
        © 2023 Pavan Bhaskar Thota. All rights reserved.
      </Text>
    </Box>
  );
};
