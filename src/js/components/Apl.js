import React from 'react';
import AddTask from './AddTask';
import Task from './Task';
class Apl extends React.Component{
    constructor(props){
        super(props);
        this.changeAddingState = this.changeAddingState.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeEditStatus = this.changeEditStatus.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.addTask = this.addTask.bind(this);
        this.state = {
            adding: false,
            tasks: [
                {
                    task: 'Wake up',
                    id: 0,
                    editing: false,
                    done: 0
                },
                {
                    task: 'Buy eggs',
                    id: 1,
                    editing: false,
                    done: 1
                },
                {
                    task: 'Rest',
                    id: 2,
                    editing: false,
                    done: 2
                },
            ],
            taskCounter: 3
        }
    }


    changeAddingState(){
        this.setState({
        adding: !this.state.adding
        });
    }
    addTask(newTask){
        let newTasks = this.state.tasks;
        newTasks.push(newTask);
        let count = this.state.taskCounter;
        count++;
        let newState = {
            tasks: newTasks,
            adding: false,
            taskCounter: count           
         };
        this.setState(newState);
    }
    changeStatus(i){
        let newTasks = this.state.tasks;

        if (this.state.tasks[i].done ==2){
            newTasks[i].done=0;
            this.setState({tasks: newTasks})
        }else {newTasks[i].done++;
                this.setState( {tasks: newTasks})
            }
    }
    remove(i){
        let newTasks = this.state.tasks;
        newTasks.splice(i,1);
        this.setState( {tasks: newTasks});
    }

    changeEditStatus(i){
        let newTasks = this.state.tasks;
        newTasks[i].editing = !newTasks[i].editing;
        this.setState( {tasks: newTasks});
    }
    save(newTask,i){
        let newTasks = this.state.tasks;
        newTasks[i].task = newTask;
        newTasks[i].editing = false;
        this.setState( {tasks: newTasks});
    }

    render(){
        let tasks = this.state.tasks.map((task, index) => <Task key={task.id}
                                                                save={this.save}
                                                                edit={this.changeEditStatus}
                                                                task={task} 
                                                                index={index} 
                                                                changeStatus={this.changeStatus} 
                                                                remove={this.remove} /> );
        return(
            <div className="container"> 
                <div><AddTask adding={this.state.adding} taskCounter={this.state.taskCounter} addTask={this.addTask} handleClick={this.changeAddingState} /></div>
                <div className='tasks'>
                    {tasks}
                </div>
            </div>
        )
    }
}

export default Apl;