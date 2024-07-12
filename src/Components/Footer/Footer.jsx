import style from './style.module.css'

export const Footer = props => {
  return (
    <footer className={style.footer}>
      <div className={style.tasks}>
        <p className={style.task}>
          Active tasks: <span className='active'>&lt;N&gt;</span>
        </p>
        <p className={style.task}>
          Finished tasks: <span className='active'>&lt;M&gt;</span>
        </p>
      </div>
      <div className='copyRight'>
        Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;
      </div>
    </footer>
  )
}
