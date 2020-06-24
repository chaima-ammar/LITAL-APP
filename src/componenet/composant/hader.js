import React from "react";
import styled from "styled-components";
import logo from  './assest/logo_lital.png'
const NavWrapper = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  padding: 0 1rem;
  background-color: #a59891;
  z-index : 10;
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: #333;
    position: absolute;
    display: block;
    content: "";
  }

  & span:before {
    top: -10px;
  }

  & span:after {
    bottom: -10px;
  }
`;

const Navbar = ({ toggleMenu }) => {
  return (
    <NavWrapper>
      <BurgerMenu
        onClick={() => {
          toggleMenu(true);
          console.log("Hamburger menu clicked, toggle open");
        }}
      >
        <span />
      </BurgerMenu>
      <img src={logo} alt="logo" width="100px"></img>
      <div width ="300px">
      <p style={{color:"#6c584c"}}>Nom user <button class="ui inverted button">Log out</button></p>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
