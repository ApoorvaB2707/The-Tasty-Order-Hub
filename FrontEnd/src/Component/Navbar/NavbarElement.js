import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// Add this CSS rule to create a styled component
// const StyledNavbarBrand = styled.span`
//   text-align: left;
//   margin-left: 10px; /* Adjust the margin as needed */
//   font-size: 24px;
//   color: #fff;
// `;

//color of navbar background
export const Nav = styled.nav`
  background: #1f51ff;
  height: 55px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

//color of signin/signup links
export const NavLink = styled(Link)`
  color: #f0ffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #f39c12;
  }

  &.active {
    color: #f0ffff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #f0ffff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavbarBrand = styled.span`
  text-align: left;
  margin-left: 10px; /* Adjust the margin as needed */
`;
