import { Route, Routes } from 'react-router-dom'
import { TaskItemList } from '../TaskItem/TaskItemList'
import style from './Content.module.css'
import { TaskDetail } from '../TaskDetail/TaskDetail'

export const Content = ({ tasks, setTasks }) => {
  return (
    <>
      <main className={style.content}>
        <Routes>
          <Route
            path={'/'}
            element={<TaskItemList tasks={tasks} setTasks={setTasks} />}
          ></Route>
          <Route
            path={'/tasks/:taskId'}
            element={<TaskDetail tasks={tasks} setTasks={setTasks} />}
          ></Route>
        </Routes>
      </main>
    </>
  )
}
