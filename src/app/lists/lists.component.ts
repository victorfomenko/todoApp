import { Component, OnInit, Inject } from '@angular/core';

import { StoreService } from '../store.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  constructor(
    @Inject('store') private store
  ) {
    this.store = store;
  }


  ngOnInit() {

  }

  onNewListClick(e){
    e.preventDefault();
    const newList = this.store.addList();
    this.store.setListActive(newList);
  }

  onListClick(list){
    this.store.setListActive(list);
  }

}
