import React from 'react';

const space = <span>&nbsp;</span>;

export default class Man extends React.Component {
  render() {
    const level = this.props.level;
    const parts = {
      head: level >= 7 && 'X' || level >= 1 && 'O' || space,
      trunk: level >= 2 && '|' || space,
      leftArm: level >= 3 && '/' || space,
      rightArm: level >= 4 && '\\' || space,
      leftLeg: level >= 5 && '/' || space,
      rightLeg: level >= 6 && '\\' || space
    };
    return <div style={styles.container}>
      <div>{parts.head}</div>
      <div>{parts.leftArm}{parts.trunk}{parts.rightArm}</div>
      <div>{parts.trunk}</div>
      <div>{parts.leftLeg}{parts.rightLeg}</div>
    </div>;
  }
}

const styles = {
  container: {
    fontFamily: 'courier new',
    fontSize: 30,
    textAlign: 'center'
  }
}
