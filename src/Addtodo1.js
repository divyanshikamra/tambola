import React, {Component} from 'react'

class Addtodo1 extends Component{
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
        this.props.addtodo1(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handlesubmit}>
                <label>Update Awards : </label>
                <input type="text" id="content" onChange={this.handlechange} value={this.state.content} />
                <button className="right">Add</button>
            </form>
        )
    }
}

export default Addtodo1