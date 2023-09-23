import {Component} from 'react';
import {nanoid} from 'nanoid';
import {Grid, GridItem, SearchForm, Todo} from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  }
  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todo'))
    if (todos) this.setState({todos})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem('todo', JSON.stringify(this.state.todos))
  }

  handleAddTodo = (text) => {
    const todo = {
      id: nanoid(),
      text,
    }
    this.setState(prev => ({
      todos: [...prev.todos, todo]
    }))
  }

handleDelete = (id) => {
    this.setState(prev => ({todos: prev.todos.filter(el => el.id !== id)}))
}

  render() {
    console.log(this.state.todos)
    return (
      <>
        <SearchForm getSearchQuery={this.handleAddTodo} />

        <Grid>
          {this.state.todos.map(({id, text}, idx) => (
            <GridItem key={id}>
              <Todo
                text={text}
                counter={idx}
                id={id}
                handleDelete={this.handleDelete}
              />
            </GridItem>
          ))}
        </Grid>
      </>
    );
  }
}
