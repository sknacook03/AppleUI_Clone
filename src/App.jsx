import { useState } from 'react'
import mockData from './constants/mock.json'

function App() {
  const data = mockData[0]
  return (
    <>
    <div>
      <h1>Model: {data.model}</h1>
      <img src="" alt="" />
    </div>
    </>
  )
}

export default App
