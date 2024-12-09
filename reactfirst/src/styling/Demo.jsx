import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:false
      }
    }
    changeColor = ()=>{
        this.setState({
            active:true
        });
    }
    
  render() {
    // let obj ={
    //     color:"black",
    //     backgroundColor:"yellow",
    
    // }
    // let obj2 ={
    //     fontSize:"50px",
    //     fontFamily:"cooper"
    // }

    

    let obj ={
        color:"black",
        backgroundColor:"yellow",
        fontSize:"50px"
    
    }
    if(this.state.active){
        obj.backgroundColor = "orange";
        obj.fontSize = "100px"
    }

    
    return (
      <div>
        {/* <h1 style={{backgroundColor:"red", color:"white"}}>Programmng with aniket</h1> */}
          {/* <h1 style={obj}>Programmng with aniket</h1> */}
          {/* <h1 style={{...obj,...obj2 }}>Programmng with aniket</h1> */}

          <button style={obj} onClick={this.changeColor} >Click</button>
      </div>
    )
  }
}
