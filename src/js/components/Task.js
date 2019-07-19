import React from 'react'
class Task extends React.Component{
    constructor(props){
    super(props);
    this.hadlerClick = this.hadlerClick.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
     } 
hadlerClick(){
this.props.changeStatus(this.props.index);
}
remove(){
this.props.remove(this.props.index);
}

edit(){
    this.props.edit(this.props.index)
}
save(e){
this.props.save(e.target.previousElementSibling.value, this.props.index);
}


render(){ 
    if(this.props.task.editing){return(
        <div className="task"> 
            <input type='text' id={`input${this.props.task.id}`} defaultValue={this.props.task.task} /> 
            <button className='btn green' onClick={this.save}>Save</button>
        </div>
    )}else{
        let color =this.props.task.done==0?'btn red':this.props.task.done==1?'btn yellow':'btn green';
        return(
    <div className="task"> 
        <p>{this.props.task.task}</p> 
        <div className='row'> 
            <button className='btn green' onClick={this.edit} >Edit</button>
            <button className={color} onClick={this.hadlerClick}>{this.props.task.done==0?'Not done':this.props.task.done==1?'In process':'Done'}</button>
            <button className='btn red' onClick ={this.remove}>Delete</button>
        </div> 
    </div>)}
}

}
export default Task;