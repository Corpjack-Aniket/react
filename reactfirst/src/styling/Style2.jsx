import React, { Component } from 'react'
// import '../styling/Style2.css';
import Style from '../styling/Style1.module.css';

export default class Style2 extends Component {
  render() {
    return (
      <div>
        {/* <h2 className='heading1'>This is second style class and css</h2> */}
        <h2 className={Style.heading1}>This is second style class and css</h2>
      </div>
    )
  }
}
