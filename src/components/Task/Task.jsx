import React from 'react'
import s from './Task.module.css'
import cross from './cross (1).png'

const Task = ({value, deleteTask, id, }) => {
  return (
    <li className={s.box_task}>
        <label>
            <input type="checkbox" className={s.check} />
            <p className='box_task_done'>hello</p>
        </label>
        <button className={s.cross}>
            <img className={s.img} src={cross} alt='' />
        </button>
    </li>
  )
}

export default Task;