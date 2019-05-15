import React, { Component } from 'react';

class AddForm extends Component{
    state ={
        content:""
    }

    addForm =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    

    render(){
        return(
            <div>
                <form onSubmit = {this.addForm}>
                <label> Add new Todo: </label>
                    <input type="text" name="content" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}


export default AddForm;
