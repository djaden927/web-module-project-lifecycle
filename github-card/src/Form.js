import React from 'react';

// input that takes in a username and has a button that sets that username to state and executes a new api call and displays new user and new user followers. 
class Form extends React.Component{
state = {
    reqUsername: ""
}



    render(){
        const { handleClick, handleChange, reqUsername } = this.props
        return(
            <form onSubmit={handleClick}>
                <label>Username:
                    <input name="username" value={reqUsername} onChange={handleChange}></input>
                </label>
                <button>Find user</button>
            </form>
        );
    }
}

export default Form;