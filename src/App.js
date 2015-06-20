import React from 'react';
import Game from './Game';
import * as actionCreators from './actionCreators';
import store from './store';
import initialState from './initialState';
import {wordSoFar, isGameWon, isGameLost} from './stateQueries';
import createDispatcher from './dispatcher';

const {dispatch, subscribe} = createDispatcher(store, initialState);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    dispatch(actionCreators.resetGame());
    this.unsubscribe = subscribe(this.setState.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Game
      errors={this.state.errors}
      usedLetters={this.state.usedLetters}
      wordSoFar={wordSoFar(this.state.word, this.state.usedLetters)}
      isGameWon={isGameWon(this.state)}
      isGameLost={isGameLost(this.state)}
      onNewLetter={this.handleNewLetter}
      onResetGame={this.handleResetGame} />;
  }

  handleNewLetter(letter) {
    dispatch(actionCreators.newLetter(letter));
  }

  handleResetGame() {
    dispatch(actionCreators.resetGame());
  }
}
