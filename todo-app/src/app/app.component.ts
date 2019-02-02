import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    newTodo = '';
    todos: Todo[] = [
        { name: 'learn angular' },
        { name: 'create an app' }];

    createTodo() {
        this.todos.push({ name: this.newTodo });
        this.newTodo = '';
    }
}
