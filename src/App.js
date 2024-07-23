import './App.css'
import { useEffect, useState } from 'react'
import { Content } from './Components/Content/Content'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const initialValue = JSON.parse(localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialValue)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Content tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  )
}

export default App
