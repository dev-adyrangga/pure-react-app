import React from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`

const App = () => {
  return <Title>Pure React Library Apps</Title>
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
