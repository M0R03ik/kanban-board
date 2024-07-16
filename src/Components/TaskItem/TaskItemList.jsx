import style from './TaskItem.module.css'
import { TaskItem } from './TaskItem'
import { dataMock } from '../../data'

export const TaskItemList = () => {
  return (
    <div className={style.tasks}>
      {dataMock.map(block => {
        return (
          <TaskItem title={block.title} tasks={block.tasks} key={block.title} />
        )
      })}
    </div>
  )
}
