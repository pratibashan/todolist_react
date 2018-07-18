import React, {Component} from 'react';
import '../Styles.css'


export class PendingItems extends Component {


  // handleCompletedTaskButtonClick = ((id) => {
   
  //   console.log(id)
  //   this.props.removeCompletedTaskItem(id)

  // })

    
    render() {
      let tasks = this.props.tasks
        console.log(tasks)
    
    let taskItems = tasks.map((task,index) => {
      return (
        <li key={index}>
          {task.title}
       <button className='completedBtn'>Done</button>  </li>       
      )      
    })
    //console.log(todoTaskItems)
    return (
        <div className='pendingTaskDiv'>   
        <h2>Pending Items</h2> 
      <ul>
        {taskItems}
      </ul>  
      </div>
    )
  }

}
