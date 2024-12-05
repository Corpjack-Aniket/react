import Component1 from "./conditionalRendering/Component1"
import Component2 from "./conditionalRendering/component2";


function App() {
  const name = "Aniket";
  if(name == "Aniket"){
    return <Component1/>
  }else{
    return <Component2/>
  }
 
}

export default App
