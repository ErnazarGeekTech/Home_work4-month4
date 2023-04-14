import React from 'react'
import './Wrapper.css'

const Wrapper = ({children}) => {
    return (
        <>
            <h1 className='TodoList'>Todo List</h1>
            <div className='box'>{children}</div>
        </>
    )
}

export default Wrapper;