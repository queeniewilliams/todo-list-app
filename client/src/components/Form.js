import React, { Component } from 'react'


export default class Form extends Component {










    
    render(){
        console.log(this.props)
        return (
            <div className="list">
                <h1>Todo List</h1>
                <form>
                    <input
                    type="text"
                    name="list one"
                    placeholder="todo one"
                    // value={name}
                    // onchange={handlechange}
                    />
                    <button>submit</button>
                </form><br></br>
                <button>clear</button>
            </div>
        )
    }
}


