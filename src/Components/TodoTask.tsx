import React from 'react'
import { ITask } from '../Interfaces'

// HOW TO MAKE INTERFACE FOR PROPS
interface Props {
    task: ITask
}


const TodoTask= ({task}: Props) =>{
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName} </span>
                <span>{task.deadline}</span>
            </div>
            <button>X</button>
        </div>
    )
}

export default TodoTask
