import React from 'react';

export default class GameOver extends React.Component {
  render() {
    const message = this.props.isGameWon ?
      <span style={{color: 'green'}}>You won!</span> :
      <span style={{color: 'red'}}>You lost!</span>;

    return <div>
      {message}
      {' '}
      <button onClick={this.props.onResetGame}>Try again?</button>
    </div>;
  }
}
