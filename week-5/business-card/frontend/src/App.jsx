import { useState } from 'react'
import { Card } from './components/Card'

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
      <Card userData={userData}></Card>
    </div>
  )
}

export default App
