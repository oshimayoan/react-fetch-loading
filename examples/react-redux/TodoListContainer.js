import React, {Component} from 'react';
import {connect} from 'react-redux';
import loadingInjector from 'react-fetch-loading';

import type {TodoList} from './your/types/directory';
import type {ReduxState} from './your/types/directory';

type Props = {
  todoList: TodoList;
  isFetching: boolean;
};

export class TodoListComponent extends Component {
  props: Props;

  render() {
    let {todoList} = this.props;
    return (
      <div>
        <h3>Todo List</h3>
        <ul>
          {
            todoList.map((todo) => {
              return <li key={todo.id}>{todo.title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = (state: ReduxState) => {
  return {
    todoList: state.todoList.todos,
    isFetching: state.todoList.isFetching,
  };
};

const TodoListContainer = connect(mapStateToProps)(loadingInjector('isFetching')(TodoListComponent));
export {TodoListContainer};
