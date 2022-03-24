import React from "react";
import styled from "styled-components";

/**
 * Feature component
 * @param {Object} params 
 * @param {String} params.src img URL
 * @param {String} params.alt img alt
 * @param {String} params.title img title
 * @param {String} params.description img descr
 * @returns {JSX} feature item
 */
const Feature = ({ src, alt, title, description }) => {
  return (
    <ITEM>
      <img src={`./images/${src}`} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </ITEM>
  );
};

export default Feature;

/*-----------------------*\
            CSS
\*-----------------------*/

const ITEM = styled.div`
  flex: 1;
  padding: 2.5rem;

  h3 {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  img {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }
`;
