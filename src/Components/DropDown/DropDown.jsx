import { useState } from 'react'
import style from './DropDown.module.css'
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
} from '@floating-ui/react'

export const DropDown = ({ tasksList, type, onClick }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpenMenu,
    onOpenChange: setIsOpenMenu,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])

  return (
    <div className={style.wrap}>
      <div
        className={style.control}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {'Select task'}
      </div>
      {isOpenMenu ? (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={style.menu}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <ul className={style.list}>
              {tasksList.map(task => {
                return (
                  <li
                    key={task.id}
                    className={style.item}
                    onClick={() => onClick(type, task.id)}
                  >
                    {task.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </FloatingFocusManager>
      ) : null}
    </div>
  )
}
