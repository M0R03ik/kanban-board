import './App.css'
import { useState } from 'react'
import { Content } from './Components/Content/Content'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { data } from './data'

function App() {
  const [tasks, setTasks] = useState(data)
  return (
    <div className='App'>
      <Header />
      <Content tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} />
    </div>
  )
}

export default App
