import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

const Card = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > * {
    margin: 4rem 0;
  }

  p {
    font-size: 5rem;
    color: #fff;
    padding: 0;
    margin: 0;

    @media (max-width: 800px) {
      font-size: 2.5rem;
    }
  }

  .answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    @media (max-width: 800px) {
      grid-gap: 2rem;
      margin: 2rem 0;
    }
  }

  button {
    padding: 1.8rem 3.2rem;
    background: none;
    transform: skewY(-6deg);
    font-size: 1.8rem;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    color: #0fb9b1;
    cursor: pointer;
    outline: none;
    :hover {
      background: #fff;
    }

    @media (max-width: 800px) {
      font-size: 1.4rem;
      padding: 0.9rem 1.6rem;
    }
  }
`;

class QuestionCard extends PureComponent {
  render() {
    const { question, answerSelected } = this.props;
    const answers = [
      <button
        className="correct"
        key={Math.random()}
        onClick={answerSelected}
        type="button"
      >
        {question.correct}
      </button>,
      <button
        className="wrong"
        key={Math.random()}
        onClick={answerSelected}
        type="button"
      >
        {question.wrong1}
      </button>,
      <button
        className="wrong"
        key={Math.random()}
        onClick={answerSelected}
        type="button"
      >
        {question.wrong2}
      </button>,
      <button
        className="wrong"
        key={Math.random()}
        onClick={answerSelected}
        type="button"
      >
        {question.wrong3}
      </button>,
    ];

    return (
      <Card>
        <p>{question.question}</p>
        <div className="answers">{answers.sort(() => Math.random() - 0.5)}</div>
      </Card>
    );
  }
}

export default QuestionCard;
