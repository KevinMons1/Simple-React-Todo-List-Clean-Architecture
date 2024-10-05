import {Todo} from "@/modules/todo/domain/entities/todo.entity.ts";
import type {ITodoRepository} from "@/modules/todo/domain/repositories/todo.repository.ts";

const TODO_KEY = "todos";

export class LocalStorageGateway implements ITodoRepository {

    async getTodos() {
        const todos = localStorage.getItem("todos");
        if (todos) {
            return JSON.parse(todos);
        }
        return [];
    }

    async createTodo(todo: Todo) {
        const todos = await this.getTodos();
        todos.push(todo);
        localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    }

    async updateTodo(todo: Todo) {
        const todos = await this.getTodos();
        const todosFiltered = todos.map((item) => {
            if (item.id === todo.id) return todo;
            return item;
        });
        localStorage.setItem(TODO_KEY, JSON.stringify(todosFiltered));
    }

    async deleteTodo(id: string) {
        const todos = await this.getTodos();
        const todosFiltered = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(TODO_KEY, JSON.stringify(todosFiltered));
    }
}
