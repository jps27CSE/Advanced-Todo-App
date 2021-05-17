import React from 'react'
import { ListGroup, ListGroupItem, CustomInput, Button } from 'reactstrap'
import PropTypes from 'proptypes'

// List Item Component

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className="d-flex align-items-center">
            <CustomInput
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button
                className="ml-auto"
                color={todo.isCompleted ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isCompleted ? 'Complete' : 'Running'}
            </Button>
        </ListGroupItem>
    )
}

ListItem.prototype = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <ListGroup>
            {todos.map(todo =>
                <ListItem
                    key={todo.id}
                    toggleComplete={toggleComplete}
                    toggleSelect={toggleSelect}
                />
            )}
        </ListGroup>
    )

}


ListView.prototype = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView