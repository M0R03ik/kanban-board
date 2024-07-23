import { useState } from 'react'
import style from './Form.module.css'
import { Button } from '../Button/Button'

export const Form = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (newTask) {
      createNewTask(newTask)
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={e => setNewTask(e.target.value)}
        value={newTask}
        className={style.newTask}
      ></input>
      <Button isSubmit={true} disabled={!newTask} type='submit'>
        Submit
      </Button>
    </form>
  )
}
