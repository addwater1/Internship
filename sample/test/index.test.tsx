import { render } from "@testing-library/react"
import App from "../src/App"
import React from "react"

describe('test app', () => {
  test('test input', () => {
    const result = render(<App />)
    expect(result).toBe(true)
  })
})