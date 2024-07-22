import style from './TaskItem.module.css'
import { Button } from '../Button/Button'
import { DropDown } from '../DropDown/DropDown'

export const TaskItem = ({
  title,
  tasks,
  isSubmit,
  setIsSubmit,
  isSelect,
  setIsSelect,
  createNewTask,
  getNewTask,
  newTask,
  setNewTask,
  data,
}) => {
  return (
    <div className={style.task}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {tasks.map(task => {
          return (
            <li className={style.item} key={task.id}>
              {task.name}
            </li>
          )
        })}
      </ul>
      {isSubmit && title === 'Backlog' && (
        <input
          type='text'
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
          className={style.newTask}
        ></input>
      )}

      {isSelect && title === 'Ready' && (
        <DropDown {...data[0]} onClick={getNewTask} />
      )}

      {title === 'Ready' && (
        <Button
          disabled={!data[0].tasks.length}
          key={title}
          onClick={() => setIsSelect(true)}
        >
          Add
        </Button>
      )}

      {isSelect && title === 'In Progress' && (
        <DropDown {...data[1]} onClick={getNewTask} />
      )}

      {title === 'In Progress' && (
        <Button
          disabled={!data[1].tasks.length}
          key={title}
          onClick={() => setIsSelect(true)}
        >
          Add
        </Button>
      )}

      {isSelect && title === 'Finished' && (
        <DropDown {...data[2]} onClick={getNewTask} />
      )}

      {title === 'Finished' && (
        <Button
          disabled={!data[2].tasks.length}
          key={title}
          onClick={() => setIsSelect(true)}
        >
          Add
        </Button>
      )}

      {isSubmit && title === 'Backlog' ? (
        <Button
          onClick={createNewTask}
          isSubmit={isSubmit}
          disabled={!newTask.length}
          key={title}
        >
          Submit
        </Button>
      ) : (
        title === 'Backlog' && (
          <Button onClick={() => setIsSubmit(true)} key={title}>
            Add
          </Button>
        )
      )}
    </div>
  )
}
