import React from "react";
import styled from "styled-components";

//PropTypes
import propTypes from "prop-types";

//------------------------------------------------------------//

const Account = ({ title, amount, descr }) => {
  return (
    <ACCOUNT>
      <CONTENT>
        <h3>{title}</h3>
        <p className="amount">{amount}</p>
        <p className="description">{descr}</p>
      </CONTENT>
      <CTA>
        <button>View transactions</button>
      </CTA>
    </ACCOUNT>
  );
};

Account.propTypes = {
  title: propTypes.string,
  amount: propTypes.string,
  descr: propTypes.string
}

/*-----------------------*\
            CSS
\*-----------------------*/

const ACCOUNT = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
background-color: #fff;
width: 80%;
margin: 0 auto;
flex-direction: column;
padding: 1.5rem;
box-sizing: border-box;
text-align: left;
margin-bottom: 2rem;

h3 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
}

.amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
}

.description {
    margin: 0;
}

@media (min-width: 720px) {
      flex-direction: row;
  

`;
const CONTENT = styled.div`
  width: 100%;
  flex: 1;
`;

const CTA = styled.div`
  width: 100%;
  flex: 1;
  button {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    background-color: #00bc77;
    border-color: #00bc77;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 720px) {
    flex: 0;

    button {
      width: 200px;
    }
  }
`;

export default Account;
