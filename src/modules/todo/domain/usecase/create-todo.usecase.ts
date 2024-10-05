import {Todo} from "@/modules/todo/domain/entities/todo.entity.ts";
import {CreateTodo} from "@/modules/todo/domain/models/todo.model.ts";
import {ITodoRepository} from "@/modules/todo/domain/repositories/todo.repository.ts";
import {v4 as uuidv4} from "uuid";

export const createTodoUseCase = (repository: ITodoRepository) => ({
    execute: async (data: CreateTodo): Promise<Todo> => {
        const todo: Todo = {
            id: uuidv4(),
            title: data.title,
            completed: false,
        };

        await repository.createTodo(todo);

        return todo;
    },
})
