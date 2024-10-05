import {ITodoRepository} from "@/modules/todo/domain/repositories/todo.repository.ts";
import {Todo, updateCompleted} from "@/modules/todo/domain/entities/todo.entity.ts";

export const completeTodoUseCase = (repository: ITodoRepository) => ({
    execute: async (todo: Todo) => {
        todo = updateCompleted(todo, !todo.completed);
        await repository.updateTodo(todo);
        return todo;
    },
})
