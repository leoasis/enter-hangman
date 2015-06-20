import React from 'react';
import Gallows from './Gallows';
import Man from './Man';
import WordSoFar from './WordSoFar';
import UsedLetters from './UsedLetters';
import GameOver from './GameOver';

export default class App extends React.Component {
  render() {
    return <div style={styles.container}>
      <Gallows width={300} height={300} hangingContentWidth={200}>
        <Man level={this.props.errors} />
      </Gallows>
      <WordSoFar word={this.props.wordSoFar} />
      {!this.isGameOver() ? <UsedLetters
        letters={this.props.usedLetters}
        onNewLetter={this.props.onNewLetter} /> :
        <GameOver
          isGameWon={this.props.isGameWon}
          onResetGame={this.props.onResetGame} />
      }
    </div>;
  }

  isGameOver() {
    return this.props.isGameWon || this.props.isGameLost;
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};
