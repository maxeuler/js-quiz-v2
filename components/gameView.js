/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import QuestionCard from './questionCard';
import GameControl from './gameControl';
import GameOver from './gameoverView';

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#0fb9b1, #2bcbba);
  transform-origin: top left;
  z-index: -1000;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;

  .line {
    width: 100%;
    height: 3px;
    background: #fff;

    @media (max-width: 800px) {
      margin: 0.5rem;
    }
  }

  > * {
    margin: 2rem 0;
  }
`;

const Explanation = styled.p`
  color: #fff;
  width: 40%;
  text-align: center;

  font-size: 2rem;

  @media (max-width: 800px) {
    font-size: 1.4rem;
    width: 100%;
    margin: 1rem 0;
  }
`;

const GameStatus = styled.p`
  color: #fff;
  font-size: 2rem;

  @media (max-width: 800px) {
    margin: 0;
    font-size: 1.2rem;
  }
`;

class GameView extends Component {
  URL = process.env.QUESTIONS;

  state = {
    questions: [],
    questionsCount: 0,
    currentQuestion: 0,
    quizIsRunning: true,
    showExplanation: false,
    correctAnswers: 0,
    questionAnswered: false,
    showError: false,
    success: false,
  };

  async componentDidMount() {
    const res = await axios.get(this.URL);
    if (res.data) {
      const shuffledQuestions = res.data.sort(() => Math.random() - 0.5);
      this.setState({
        questions: shuffledQuestions,
        questionsCount: shuffledQuestions.length,
      });
    }
  }

  answerSelected = e => {
    if (this.state.questionAnswered) return;
    this.setState({ questionAnswered: true, showExplanation: true });
    if (e.target.className === 'correct') {
      this.setState(prevState => ({
        correctAnswers: prevState.correctAnswers + 1,
        success: true,
      }));
    }
  };

  nextQuestion = () => {
    // check if game is over
    if (this.state.questionsCount - 1 == this.state.currentQuestion) {
      this.setState({ quizIsRunning: false });
      return;
    }
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
      questionAnswered: false,
      showExplanation: false,
      success: false,
    }));
  };

  render() {
    const currentQuestion =
      this.state.questions[this.state.currentQuestion] || '';

    return (
      <>
        <Background></Background>
        {this.state.quizIsRunning ? (
          <Main>
            <GameStatus>
              Question {this.state.currentQuestion + 1} of{' '}
              {this.state.questions.length}
            </GameStatus>

            <QuestionCard
              question={currentQuestion || ''}
              answerSelected={this.answerSelected}
            ></QuestionCard>

            {this.state.showExplanation && (
              <>
                <Explanation>
                  {this.state.success ? 'Correct 🔥' : 'Ooooohps 😮❌'}
                </Explanation>
                <Explanation>{currentQuestion.explanation}</Explanation>
              </>
            )}
            <div className="line"></div>
            <GameControl
              disabled={!this.state.questionAnswered}
              next={this.nextQuestion}
              isLastQuestion={
                this.state.currentQuestion + 1 == this.state.questionsCount
              }
            ></GameControl>
          </Main>
        ) : (
          <GameOver
            correctAnswers={this.state.correctAnswers}
            questionsCount={this.state.questionsCount}
          ></GameOver>
        )}
      </>
    );
  }
}

export default GameView;
