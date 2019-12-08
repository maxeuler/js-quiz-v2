import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Buttons = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .selected {
    background: #fff;
  }
`;

const CancelLink = styled.a`
  border: none;
  background: none;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

const NextButton = styled.button`
  border: none;
  background: #fff;
  color: #0fb9b1;
  padding: 1.8rem 3.2rem;
  font-size: 1.8rem;
  cursor: pointer;
  outline: none;
  :disabled {
    background: rgba(255, 255, 255, 0.5);
    cursor: default;
  }
`;

const GameControl = props => (
  <Buttons>
    <Link href="/">
      <CancelLink>Cancel</CancelLink>
    </Link>
    <NextButton type="button" disabled={props.disabled} onClick={props.next}>
      {props.isLastQuestion ? 'Finish Quiz' : 'Next'}
    </NextButton>
  </Buttons>
);

export default GameControl;
