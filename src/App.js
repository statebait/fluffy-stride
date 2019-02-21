import React from "react"
import MainInput from "./components/MainInput"
import { Button } from "reactstrap"
import "./App.scss"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App-wrapper">
          <p className="stride-text">Stride!</p>
          <MainInput />
          <Button id="App-button" size="lg">
            Encrypt
          </Button>
        </div>
      </React.Fragment>
    )
  }
}

export default App
