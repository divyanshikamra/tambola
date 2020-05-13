import React, {Component} from 'react'

class Addtodo extends Component{
    state = {
        content : null
    }
    handlechange = (e) =>{
        this.setState({
            content : e.target.value
        })
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        this.props.addtodo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handlesubmit}>
                <label>Update your Todo's : </label>
                <input type="text" id="content" onChange={this.handlechange} value={this.state.content} />
                <button>Add</button>
            </form>
        )
    }
}

export default Addtodo