import "./App.css"

//import

// type-1
// import Title from "./Title.jsx";

// type-2
import {Title} from "./Title.jsx";


import ProductTab from "./ProductTab.jsx";

import MssgBox from "./MssgBox.jsx";

// function Description()
// {
//  return  <h3>I am the description </h3>
// }

function App() {

  return (

    <>
    <MssgBox username={"Arib 30"} textcolor={"white"}/>

      <h1>This is my app component </h1>
      <p>Hi, I am Fagun</p>

      <Title />

      <ProductTab/>


    </>
  )
}

export default App
