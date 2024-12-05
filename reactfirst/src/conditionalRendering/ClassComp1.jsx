import React, { Component } from 'react'
import Component1 from './Component1';
import Component2 from './component2';

export default class ClassComp1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Aniket"
      }
    }

    
    
  render() {
    //  const name = "Aniket";
  if(this.state.name == "Aniket"){
    return <Component1/>
  }else{
    return <Component2/>
  }
  }
}
