import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NAV className="main-nav">
      <Link className="logo" to="/">
        <LOGO src="./images/logo.png" alt="Argent Bank Logo" />
        <SRONLY>Argent Bank</SRONLY>
      </Link>

      <LOGIN>
        <Link className="item" to="/login">
          <span className="fa fa-user-circle"></span>
          Sign In
        </Link>
      </LOGIN>

      {/* <LOGOUT>
        <span className="fas fa-user user"></span>
        <span className="name">FirstName</span>
        <Link className="item" to="/">
          <span className="fas fa-sign-out-alt out"></span>
          Sign out
        </Link>
      </LOGOUT> */}
    </NAV>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const SRONLY = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const NAV = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    align-items: center;
  }

  .item {
    text-decoration: none;
    margin-right: 0.5rem;

    span {
      margin-right: 4px;
    }

    :hover {
      text-decoration: underline;

      .logo {
        display: flex;
        align-items: center;
      }
    }
  }
`;

const LOGO = styled.img`
  max-width: 100%;
  width: 200px;
`;

const LOGIN = styled.div``;

// const LOGOUT = styled.div`
//   display: flex;
//   align-items: center;

//   .name {
//     font-weight: bold;
//     color: #2c3e50;
//     margin-right: 25px;
//   }

//   .user {
//     color: #98a3b0;
//     padding: 12px;
//     background: #dde2ea;
//     border-radius: 50%;
//     margin-right: 10px;
//   }

//   .out {
//     font-size: 1.5rem;
//   }
// `;

export default Nav;
