import React from "react"
import { Form, FormGroup, Input } from "reactstrap"
import "./style.scss"

const MainInput = () => {
  return (
    <Form>
      <FormGroup>
        <Input
          id="encrypt-input"
          type="email"
          name="email"
          size="large"
          placeholder="Enter your sentence here!"
        />
      </FormGroup>
    </Form>
  )
}

export default MainInput
