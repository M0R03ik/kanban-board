import { TaskItemList } from '../TaskItem/TaskItemList'
import style from './Content.module.css'

export const Content = () => {
  return (
    <>
      <main className={style.content}>
        <TaskItemList />
      </main>
    </>
  )
}
