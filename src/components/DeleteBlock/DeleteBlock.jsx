import React from 'react'
import s from "./DeleteBlock.module.css"

const DeleteBlock = () => {
  return (
    <div className='{s.box_delete}'>
        <button className={s.delete_competed}>Удалить завершенные</button>
        <button className={s.delete_all}>Удалить все</button>
    </div>
  )
}

export default DeleteBlock