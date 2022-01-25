import { useState } from 'react'
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from './component/AddTask';

const  App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appoitment',
        day: 'Feb 5th at 2:30pm',
        reminder:true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 8th at 1:30pm',
        reminder:true,
      },
      {
        id: 3,
        text: 'Food Shopping Appoitment',
        day: 'Feb 5th at 2:30pm',
        reminder:false,
      },
    ])

    // Delete Task 
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id ))
    }


    // Toogle Reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task))
    }



  return (
    <div className='container'>
      <Header/>
      <AddTask/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} />) : (' No task to display')}
    </div>
  );
}



// class App extends React.Component{
//   render () {
//     return <h1>Hello from a class</h1>
//   }
// }
export default App;
