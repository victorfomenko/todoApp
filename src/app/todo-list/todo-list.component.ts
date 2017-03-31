import { Component, OnInit, Inject } from '@angular/core';

import { StoreService } from '../store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(
    @Inject('store') private store
  ){
    this.store = store;
  }

  ngOnInit() {
  }

  onAddTodoClick(e, listToAdd){
    e.preventDefault();
    this.store.addTodo(listToAdd);
  }

}
