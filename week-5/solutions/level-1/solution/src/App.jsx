import { useState } from 'react'
import { BusinessCard } from './components/BusinessCard'

function App() {
  const data = {
    name: "Pranav",
    desc: "A Student doing Web Development",
    interests: [
      "WebDevelopment",
      "Data Structures and Algorithms"
    ],
    linkedin:"https://www.linkedin.com",
    github:"https://github.com"
  }
  const [userData, setData] = useState(data)
  return (
    <div>
      <BusinessCard userData={userData}></BusinessCard>
    </div>
  )
}

export default App