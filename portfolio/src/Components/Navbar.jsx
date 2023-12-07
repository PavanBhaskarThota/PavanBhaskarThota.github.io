import { Heading } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
export const Navbar = () => {
  return (
    <DIV>
      <div className="pblogo">
        <Heading>Pavan.dev</Heading>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </DIV>
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
