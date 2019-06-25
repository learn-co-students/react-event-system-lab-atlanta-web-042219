import React from 'react'

class Keypad extends React.Component {
  keyUpLog = () => {
    console.log('Entering password...');
  }

  render() {
    return(
      <input type='password' onKeyUp={this.keyUpLog} />
    )
  }
}

export default Keypad