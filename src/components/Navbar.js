import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ButtonContainer} from "./Button";
import styled from "styled-components";

library.add(faCartPlus);

export default class Navbar extends Component {
  render(){
    return (
      <NavWrapper className="nav navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-4">
            <Link className="nav-link" to="/">Produkts</Link>
          </li>
        </ul>
        <Link className="ml-auto" to="/card">
          <ButtonContainer>
            <span className="mr-2">
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            my cart
          </ButtonContainer>  
        </Link>
      </NavWrapper>
    );
  }
}


const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;