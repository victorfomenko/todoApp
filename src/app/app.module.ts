import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StoreService } from './store.service';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{
    provide: 'store', useClass: StoreService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
