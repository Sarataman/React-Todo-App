import React from 'react'

const Header = (props) => {
    return(
        <div className="card-header">
            
            <h1 className="card-header title">
                You have {props.totalTodos} Todos.
            </h1>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Header
