import React from 'react';

export default class Gallows extends React.Component {
  render() {
    const containerStyles = {
      width: this.props.width,
      height: this.props.height
    };

    const hangingContentStyles = {
      width: this.props.hangingContentWidth,
      marginLeft: -this.props.hangingContentWidth/2,
    }

    return <div style={containerStyles}>
      <div style={styles.top}>
        <div style={{...styles.hangingContent, ...hangingContentStyles}}>
          {this.props.children}
        </div>
      </div>
      <div style={styles.column} />
      <div style={styles.platform} />
    </div>;
  }
}

const styles = {
  top: {
    height: '10%',
    borderLeft: '1px solid',
    borderTop: '1px solid',
    borderRight: '1px solid',
    position: 'relative'
  },
  hangingContent: {
    position: 'absolute',
    top: '100%',
  },
  column: {
    height: '75%',
    borderRight: '1px solid',
  },
  platform: {
    height: '15%',
    border: '1px solid',
    backgroundColor: 'brown'
  }
}
