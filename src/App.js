import './App.css'
import { useState } from 'react'
import { Content } from './Components/Content/Content'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { dataMock } from './data'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [tasks, setTasks] = useState(dataMock)
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
