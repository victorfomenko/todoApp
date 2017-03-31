import { Injectable } from '@angular/core';

@Injectable()

export class Todo {
  completed: Boolean;

  private _name: String;
  get name() {
    return this._name;
  }
  set name(value: String) {
    this._name = value.trim();
  }

  constructor(name: String) {
    this.completed = false;
    this.name = name ? name.trim() : 'Item';
  }
}

export class List {
  active: Boolean;
  todos: Array<Todo>;

  private _name: String;
  get name() {
    return this._name;
  }
  set name(value: String) {
    this._name = value.trim();
  }

  constructor(name: String) {
    this.active = false;
    this.name = name ? name.trim() : 'Todos';
    this.todos = [];
  }
}

export class StoreService {
  lists = [];

  constructor() {

  }

  removeList(list) {
    this.lists.splice(this.lists.indexOf(list), 1);
  };

  addList(name){
    const newList = new List(name);
    this.lists.unshift(newList);
    return newList;
  }

  addTodo(list, name){
    const listIndex = this.lists.indexOf(list);
    const newTodo = new Todo(name);
    this.lists[listIndex].todos.push(newTodo);
    return newTodo;
  }

  getWithCompleted = function (list, completed) {
    const listIndex = this.lists.indexOf(list);
    return this.lists[listIndex].todos.filter(todo => {
      return todo.completed === completed;
    });
  };

  setListActive(list) {
    const listIndex = this.lists.indexOf(list);

    this.lists = this.lists.map((item, index)=>{
      index === listIndex ?
        item.active = true :
        item.active = false;
      return item
    })

    return this.lists;
  }
}
