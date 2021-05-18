import React from 'react'
import ListView from '../listview/index'
import TableView from '../tableview/index'

class Todos extends React.Component {

    //dummy data  

    state = {
        todos: [
            {
                id: 22345,
                text: 'main todo text',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },

            {
                id: 12375,
                text: 'main todo text',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ]
    }

    //dummy function 

    toggleSelect = (todoId) => {

    }

    toggleComplete = (todoId) => {

    }


    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Todo</h1>
                <div>
                    <ListView
                        todos={this.state.todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                </div>
                <div>
                    <TableView
                        todos={this.state.todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                </div>
            </div>
        )
    }
}

export default Todos