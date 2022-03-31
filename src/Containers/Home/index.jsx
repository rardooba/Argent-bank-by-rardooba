import React from "react";
import styled from "styled-components";

//Components
import Feature from "./Feature";

//Data > Features
import features from "../../API/features";

const Home = () => {
  return (
    <MAIN>
      
      <div className="banner">
        <section className="caption">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="title-point">No fees.</p>
          <p className="title-point">No minimum deposit.</p>
          <p className="title-point">High interest rates.</p>
          <p className="description">
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>

      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature) => (
          <Feature
            key={feature.id}
            src={feature.src}
            alt={feature.alt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>

    </MAIN>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const MAIN = styled.main`
  .banner {
    background-image: url(./images/bank-tree.jpeg);
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;

    .caption {
      position: relative;
      top: 2rem;
      width: 200px;
      background: white;
      padding: 2rem;
      text-align: left;
      margin: 0 auto;

      .title-point {
        font-weight: bold;
        font-size: 1rem;
        margin: 0;
      }

      .description {
        margin-bottom: 0;
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 920px) {
    .banner {
      height: 400px;
      background-position: 0% 33%;

      .caption {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;

        .title-point {
          font-size: 1.5rem;
        }

        .description {
          font-size: 1.2rem;
        }
      }
    }
  }

  .features {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 920px) {
    .features {
      flex-direction: row;
    }
  }
`;

export default Home;
