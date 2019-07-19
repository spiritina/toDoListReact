import React from 'react';

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.handlerAdd = this.handlerAdd.bind(this);
        
    }

    handlerAdd(e){
        let newTask = {
            task: e.target.previousElementSibling.value,
            id: this.props.taskCounter,
            editing: false,
            done: 0
        };
        this.props.addTask(newTask);
    }

    render(){
        if(this.props.adding) {return(
            <div className='adding yellow'> 
                <div className='row'>
                    <input type='text' defaultValue='New Task'/> 
                    <button className='btn green' onClick={this.handlerAdd}>Add</button> 
                </div>
            </div>
        ) }else {return (
            <button className='plus' onClick={this.props.handleClick} >+</button>
        )}
        
    }
}

export default AddTask;