import React from 'react'
import s from './Form..module.css'
import Task from '../Task/Task'

const Form = ({ addTask, setValue, todo, value, deleteTask }) => {
    return (
        <>
            <div className="container">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        addTask();
                    }}
                >
                    <input type='text'
                        className={s.input_task}
                        placeholder='Add task'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className={s.add}>Добавить</button>
                </form>
            </div>
            <ul className="list">
                {todo.map((el) => (
                    <Task
                        value={el.text}
                        id={el.id}
                        deleteTask={deleteTask}

                    />
                ))}
            </ul>
        </>
    )
}

export default Form