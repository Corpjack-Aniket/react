import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    let obj ={
        color:"black",
        backgroundColor:"yellow",
        fontSize:"50px"
    }
    return (
      <div>
        {/* <h1 style={{backgroundColor:"red", color:"white"}}>Programmng with aniket</h1> */}
          <h1 style={obj}>Programmng with aniket</h1>
      </div>
    )
  }
}
