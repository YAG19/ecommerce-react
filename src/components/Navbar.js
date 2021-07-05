import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";

const Input = styled.input`
  margin-left: 10px;
  margin-top: 15px;
  font-size: 20px;
  line-height: 1;
  background-color: transparent;
  width: 50%;
  height: 40px;
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  background: white;
  color: black;
  &:focus,
  &:active {
    outline: none;
  }
  
  &::placeholder {
    color: black;
  }
`;

const NavbarContainer = styled.div`
  position:fixed;
  width:100%;
  background: #000000;
  height:80px;
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const NavBtn = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: #fff;
  background: transparent;
  &:hover {
    background: white;
    color: black;
  }
`;

const Navbar = ({ handleNav, handleSearch }) => {
  return (
    <React.Fragment>
      <NavbarContainer>
        <img src={logo}  alt="logo" />

        <NavBtn type="button" onClick={() => handleNav("Men")}>
          Male
        </NavBtn>

        <NavBtn type="button" onClick={() => handleNav("Women")}> 
          Female
        </NavBtn>

        <NavBtn type="button" onClick={() => handleNav("Men")}>
          Boys
        </NavBtn>

        <NavBtn type="button" onClick={() => handleNav("Women")}>
          Girls
        </NavBtn>

        <Input
          onChange={(e) => handleSearch(e.target.value)}
          //   value={input}

          placeholder="Search for a Product"
        />
      </NavbarContainer>
    </React.Fragment>
  );
};

export default Navbar;
