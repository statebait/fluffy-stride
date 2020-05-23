import React from "react"
import MainInput from "./components/MainInput"
import Names from "./components/Names"
import "./App.scss"

const App = () => {
  return (
    <div className="App-wrapper">
      <h1 className="stride-text">Stride!</h1>
      <MainInput />
      <Names />
    </div>
  )
}

export default App
