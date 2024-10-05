import {ITodoRepository} from "@/modules/todo/domain/repositories/todo.repository.ts";

export const deleteTodoUseCase = (repository: ITodoRepository) => ({
    execute: async (id: string) => {
        await repository.deleteTodo(id);
    },
})
