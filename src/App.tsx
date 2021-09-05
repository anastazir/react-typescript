import {ChangeEvent, FC, useState} from "react"
import './App.css';
import TodoTask from "./Components/TodoTask";
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

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskNameToDelete
    }))
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
      <div className="todoList">
        {todoList.map((todo: ITask, key: number) =>{
          return <TodoTask key={key} task = {todo} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
