import React from "react"
import { AwesomeButton } from "react-awesome-button"
import MainInput from "./components/MainInput"
import Names from "./components/Names"
import "react-awesome-button/dist/themes/theme-c137.css"
import "./App.scss"

const App = () => {
  return (
    <div className="App-wrapper">
      <h1 className="stride-text">Stride!</h1>
      <MainInput />
      <AwesomeButton type="secondary" className="App-button">
        Huh!
      </AwesomeButton>
      <Names />
    </div>
  )
}

export default App
