import React, { Component } from 'react'
import '../styling/External.css';

export default class ExternalCss extends Component {
//! apply condition 

  render() {
    let x = this.props.check ? 'myFont': 'myfont2';
    return (
      <div>
        {/* <h1 className='myFont myfont2'>MY NAME IS aNIKET</h1> */}
        {/* <h1 className={x}>MY NAME IS aNIKET</h1> */}
        <h1 className={`${x} myfont3`}>MY NAME IS aNIKET</h1>
      </div>
    )
  }
}
 