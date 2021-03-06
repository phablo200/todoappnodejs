import React, { Component } from 'react';
import axios from 'axios';
import PageHeader from '../template/pageHeader';
import TodoForm   from './todoForm';
import TodoList   from './TodoList';

const URL = "http://localhost:3003/api/todos";
export default class Todo extends Component {
  constructor(props) {
      super(props);
      this.state        = {description: '', list: []}
      this.handleAdd    = this.handleAdd.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
      this.handleMarkAsPading = this.handleMarkAsPading.bind(this);
      this.refresh();
  }

  refresh () {
    let rota = `${URL}?sort=createdAt`;
    axios.get(rota)
      .then(resp => {
        this.setState({...this.state, description: '', list: resp.data});
      });
  }

  handleRemove (todo)
  {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => {
        this.refresh();
    });
  }

  handleMarkAsDone (todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(resp => {
            this.refresh();
        });
  }

  handleMarkAsPading (todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
      .then(resp => {
        this.refresh();
      });
  }

  handleChange (e) {
      this.setState({...this.state, description: e.target.value});
  }

  handleAdd () {
      var description = this.state.description;
      axios.post(URL, {description}).then(resp => {
          this.refresh();
      });
  }

  render () {
    return (
      <div>
          <PageHeader name="Tarefas" small="Cadastro"/>
          <TodoForm
              handleChange={this.handleChange}
              description={this.state.description}
              handleAdd={this.handleAdd}/>
          <TodoList
              list={this.state.list}
              handleRemove={this.handleRemove}
              handleMarkAsPading={this.handleMarkAsPading}
              handleMarkAsDone={this.handleMarkAsDone}
              />
      </div>
    )
  }
}
