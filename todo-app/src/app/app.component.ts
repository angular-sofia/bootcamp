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

    get unfinishedTodos(): number {
        return this.todos.filter(t => !t.completed).length;
    }

    createTodo() {
        this.todos.push({ name: this.newTodo });
        this.newTodo = '';
    }

    deleteTodo(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}
