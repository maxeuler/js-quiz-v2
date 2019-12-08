import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const GameOverStyle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  p {
    font-size: 2.5rem;
  }
  a {
    margin: 1rem auto;
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
  }
`;

const GameOver = ({ questionsCount, correctAnswers }) => {
  const quote = correctAnswers / questionsCount;
  return (
    <GameOverStyle>
      <h2>Game Over</h2>
      <h4>
        You answered {correctAnswers} of {questionsCount} questions correct!
      </h4>
      {quote < 0.3 && <p>😰😰😰</p>}
      {quote >= 0.3 && quote < 0.6 && <p>👀👀👀</p>}
      {quote >= 0.6 && quote < 0.9 && <p>👏🏼👏🏼👏🏼</p>}
      {quote >= 0.9 && <p>🚀🚀🚀</p>}
      <Link href="/">
        <a>Home</a>
      </Link>
    </GameOverStyle>
  );
};

export default GameOver;
