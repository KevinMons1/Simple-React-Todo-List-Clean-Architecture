import {Todo} from "@/modules/todo/domain/entities/todo.entity.ts";
import {ITodoRepository} from "@/modules/todo/domain/repositories/todo.repository.ts";

export const getTodosUseCase = (repository: ITodoRepository) => ({
    execute: async (): Promise<Todo[]> => {
        return repository.getTodos();
    },
})
