import Header from "./components/Header";
import Tasks from './components/Tasks'
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'gie',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'gao',
            day: 'Feb 13th at 2:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'ya',
            day: 'Jan 5th at 1:30pm',
            reminder: false
        },
    ]);

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

  return (
    <div className="container">
      <Header></Header>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}></Tasks> : 'No Tasks'}
    </div>
  );
}


export default App;
