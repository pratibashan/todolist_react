import React, { Component } from 'react';
import { PendingItems } from './components/PendingItems';
import './App.css';
import './Styles.css'

class App extends Component {
  
        constructor(props) {
          // initialize the parent class which is Component
          super(props)
      
          this.state = {
            currentTask : '',
            tasks: []
          
          }

        }

        // removeCompletedTaskItem = ((taskId) => {
        //   var filteredTasks = this.state.tasks.filter((task) => {
        //     return (task.taskId !== taskId);
        //   })
         
        //   this.setState({
        //     tasks: filteredTasks
        //   })

        // })
  
      
        handleAddTaskButtonClick = ((e) => {

          //console.log(this.state.tasks)
          e.preventDefault()
          let task = { title : this.state.currentTask, taskId : this.state.tasks.length + 1 }

          this.setState({
            ...this.state,
            tasks : this.state.tasks.concat(task),

           
          })
       
         
        })
      
      
        handleTaskTextBoxChange = ((e) => {
      
          this.setState({
            currentTask : e.target.value
            
          })
          
          //console.log(this.state)
      
        })

        render() {
          return (
            <div className='wrapper'>
            <div className='header'>
           
              <input className='taskTextBox' onChange={this.handleTaskTextBoxChange} type="text" />
              <button className='addTaskBtn' onClick={this.handleAddTaskButtonClick}>Add Task</button>
             </div>
              <PendingItems tasks = {this.state.tasks}/>
              </div>
           
      
      
          );
        }
      }
      

export default App;
