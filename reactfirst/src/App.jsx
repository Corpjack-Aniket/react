import React from "react";
import ClassComp1 from "./conditionalRendering/ClassComp1";
import Component1 from "./conditionalRendering/Component1"
import Component2 from "./conditionalRendering/component2";
import Student from "./List/Array Rendering/Student";
import Demo from "./styling/Demo";
import ExternalCss from "./styling/ExternalCss";
import Style1 from "./styling/Style1";
import Style2 from "./styling/Style2";
import BsComp from "./Bootstrap/BsComp";



function App() {
  // const name = "Aniket";
  // if(name == "Aniket"){
  //   return <Component1/>
  // }else{
  //   return <Component2/>
  // } 


  // const name = "Aniket";
  // let data;
  // if(name == "Aniket"){
  //   //! this variable is called element variable because all element of component1 is saved in data variable
  //   data =  <Component1/>
  // }else{
  //   data = <Component2/>
  // }
     
  const name = "Aniket";
  const age = 14;
//! logical opertor or short circuting opertor &&

  return(
    <div>
      {/* {data} */}
      {/* {name =="Aniket" && <h1>Hello Aniket</h1>} //! logically operator basicalyy use when the condition is always true if it false it will not print any thing. */}
    {/* {age>=18?<h1>You can Vote 😊😊😊</h1>:<h1>You can't vote😂😂😂</h1>} */}
    {/* {name=="Aniket"?<Component1/>:<Component2/>} */}
    {/* <ClassComp1/> */}
    {/* <Student/> */}
    {/* <Demo/> */}
    {/* <ExternalCss check = {true}/> */}
    //! name conflicting in external css issue 
    {/* <Style1/>
    <Style2/> */}
    <BsComp/>
    </div>
  )
 
 
}

export default App
