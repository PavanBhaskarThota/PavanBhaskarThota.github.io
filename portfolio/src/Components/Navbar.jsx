import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
export const Navbar = () => {
  return (
    <Box bgColor={'white'}>
      <DIV>
        <div className="pblogo" id="nav-menu">
          <Heading>Pavan.dev</Heading>
        </div>
        <div className="links">
          <a className="nav-link home" href="/">Home</a>
          <a className="nav-link about" href="/about">About</a>
          <a className="nav-link skills" href="/skills">Skills</a>
          <a className="nav-link projects" href="/projects">Projects</a>
          <a className="nav-link contact" href="/contact">Contact</a>
        </div>
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
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  padding-top: 20px;
  position: fixed;
  background-color: white;

  .pblogo {
    width: 40%;
    height: 60px;
  }

  .links {
    width: 40%;
    display: flex;
    justify-content: space-around;
  }

  .links a {
    text-decoration: none;
    color: black;
  }
`;
