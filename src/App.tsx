import React from "react"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-c137.css"
import MainInput from "./components/MainInput"
import "./App.scss"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App-wrapper">
          <h1 className="stride-text">Stride!</h1>
          <MainInput />
          <AwesomeButton type="secondary" className="App-button">
            Huh!
          </AwesomeButton>
        </div>
      </React.Fragment>
    )
  }
}

export default App
