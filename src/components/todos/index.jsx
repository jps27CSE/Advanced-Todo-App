import React from 'react'
import ListView from '../listview/index'
import TableView from '../tableview/index'
import Controller from '../controllers/index'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import CreateTodoForm from '../create-todo-form/index'
import shortid from 'shortid'

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
        ],

        isOpenTodoForm: false,
        searchTerm: ''
    }

    //dummy function 

    toggleSelect = (todoId) => {
         const todos = [...this.state.todos]
         const todo = todos.find(t => t.id ===todoId)
         todo.isSelect = !todo.isSelect

         this.setState({todos})
    }

    toggleComplete = (todoId) => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id ===todoId)
        todo.isComplete = !todo.isComplete

        this.setState({todos})
    }

    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }


    handleSearch = () => {

    }

    createTodo = (todo) => {
         todo.id =shortid.generate()
         todo.time = new Date()
         todo.isComplete = false
         todo.isSelect = false

         const todos = [todo, ...this.state.todos]
         this.setState({todos})
         this.toggleForm()
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Todo</h1>
                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                />
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
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader
                        toggle={this.toggleForm}
                    >
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos