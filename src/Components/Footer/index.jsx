import React from 'react';
import styled from 'styled-components'

const Footer = () => {

    /**
   * Get current year
   * @returns {String} current year ex: "2022"
   * @version 1.0
   */
  const dynamicDateCopyright = () => {
    return new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
    });
  };

    return (
        <FOOTER>
            <p>Copyright {dynamicDateCopyright()} Argent Bank</p>
        </FOOTER>
    );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const FOOTER = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid rgb(204, 204, 204);
    padding: 2rem 0 1.5rem;
` 

export default Footer;