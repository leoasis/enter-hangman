import React from 'react';

export default class WordSoFar extends React.Component {
  render() {
    return <div style={styles.container}>
      {this.props.word.split('').join(' ')}
    </div>;
  }
}

const styles = {
  container: {
    margin: 30,
    fontSize: 25
  }
}
