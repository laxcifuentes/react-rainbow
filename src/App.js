import React, { useState } from "react"
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";


function App() {
  let [colors, setColors] = useState([
    'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'
  ])

let colorMap = colors.map((color, i) => {
  return (
    <ColorBlock color={color} />
  )
})

const addColor = (newColor) => {
  setColors(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red', newColor])
}



  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
      {/* {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))} */}
    </div>
  )
}

export default App;


