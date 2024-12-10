import React, { Component } from 'react'
// import '../styling/Style1.css';
import Style from '../styling/Style1.module.css';

export default class Style1 extends Component {
  render() {
    return (
      <div>
        {/* <h1 className='heading1'>This is bg color</h1> */}
        <h1 className={Style.heading1}>This is bg color</h1>
      </div>
    )
  }
}
