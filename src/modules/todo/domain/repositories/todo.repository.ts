import type {Todo} from "@/modules/todo/domain/entities/todo.entity.ts";

export interface ITodoRepository {
    getTodos: () => Promise<Todo[]>;
    createTodo: (todo: Todo) => Promise<void>;
    updateTodo: (todo: Todo) => Promise<void>;
    deleteTodo: (id: string) => Promise<void>;
}
