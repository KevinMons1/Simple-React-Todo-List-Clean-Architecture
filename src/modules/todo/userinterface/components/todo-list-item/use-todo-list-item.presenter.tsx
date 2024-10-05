import {deleteTodoUseCase} from "@/modules/todo/domain/usecase/delete-todo.usecase.ts";
import {LocalStorageGateway} from "@/modules/todo/infrastructure/gateways/local-storage.gateway.ts";
import {useAppDispatch, useAppSelector} from "@/store/store.tsx";
import {setTodos} from "@/modules/todo/userinterface/store/todo-slice.tsx";
import {completeTodoUseCase} from "@/modules/todo/domain/usecase/complete-todo.usecase.ts";
import {Todo} from "@/modules/todo/domain/entities/todo.entity.ts";

const repository = new LocalStorageGateway();
const _deleteTodoUseCase = deleteTodoUseCase(repository);
const _completeTodoUseCase = completeTodoUseCase(repository);

const UseTodoListItemPresenter = () => {
    const dispatch = useAppDispatch();
    const { todos } = useAppSelector((state) => state.todo);

    const deleteTodo = async (id: string) => {
        await _deleteTodoUseCase.execute(id);
        const todosFiltered = todos.filter((todo) => todo.id !== id);
        dispatch(setTodos(todosFiltered));
    };

    const completeTodo = async (todo: Todo) => {
        const todoUpdated = await _completeTodoUseCase.execute(todo);
        const todosFiltered = todos.map((todoToUpdate) => {
            if (todoToUpdate.id === todoUpdated.id) return todoUpdated;
            return todoToUpdate;
        });
        dispatch(setTodos(todosFiltered));
    };

    return {
        deleteTodo,
        completeTodo,
    }
};

export default UseTodoListItemPresenter;
