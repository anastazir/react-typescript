import {ChangeEvent, FC, useState} from "react"
import './App.css';
import {ITask} from "./Interfaces"

const App: FC= () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([]) // accepts a object ITask which must be an array

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if (event.target.name === 'task'){
      setTask(event.target.value)
    }
    else{
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    console.log(newTask);
    setTodoList([...todoList, newTask])
    // empty the inputs on click
    setTask("")
    setDeadline(0)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" onChange={handleChange} value={task} />
          <input type="number" placeholder="Deadline in days" name="deadline" onChange={handleChange} value={deadline} />
        </div>
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
}

export default App;
