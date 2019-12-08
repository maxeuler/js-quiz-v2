import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const HomeBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-image: linear-gradient(#0fb9b1, #2bcbba);
    transform: skewY(-6deg);
    transform-origin: top left;
    z-index: -1000;
  }

  main {
    color: #fff;
    text-align: center;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
      font-size: 6rem;
      margin-bottom: 0;
    }
    p {
      padding-top: 0;
      font-style: italic;
    }
    a {
      width: 10rem;
      padding: 1.8rem 3.2rem;
      text-decoration: none;
      color: #0fb9b1;
      background: #fff;
      font-size: 1.6rem;
      border: 1px solid #fff;
      transform: skewY(-6deg);
      &:hover {
        background: rgba(255, 255, 255, 0.75);
        border-color: rgba(255, 255, 255, 0.75);
      }

      @media (max-width: 800px) {
        margin-top: 2rem;
      }
    }
  }

  article {
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 4rem;
      color: #0fb9b1;
    }
  }
`;

const Home = () => (
  <HomeBackground>
    <div className="background"></div>
    <main>
      <header>
        <h1>You don't know JS!</h1>
        <p>Kyle Simpson</p>
      </header>
      <Link href="/game">
        <a>Start</a>
      </Link>
    </main>
  </HomeBackground>
);

export default Home;
