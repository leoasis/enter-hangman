import React from 'react';

export default class UsedLetters extends React.Component {
  render() {
    return <div>
      Used letters: {this.props.letters.join(' - ')}
      {' '}
      <input
        type="text"
        value=""
        style={styles.input}
        placeholder="Insert new letter here"
        onChange={this.handleNewLetter.bind(this)} />
    </div>;
  }

  handleNewLetter(ev) {
    const letter = ev.target.value[0];

    if (/[A-Za-z]/.test(letter)) {
      this.props.onNewLetter(letter.toUpperCase());
    }
  }
}

const styles = {
  input: {
    border: 0,
    outline: 'none'
  }
}
