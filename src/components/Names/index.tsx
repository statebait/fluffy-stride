import React from "react"
import faker from "faker"
import "./style.scss"

const names = () => {
  let arr = []
  for (let i = 0; i < 20; i++) {
    arr.push(faker.name.firstName())
  }
  return arr
}

export default () => {
  return (
    <div className="names-wrapper">
      <div className="names-map-wrapper">
        {names().map((name: string) => (
          <div className="name">{name}</div>
        ))}
      </div>
    </div>
  )
}
