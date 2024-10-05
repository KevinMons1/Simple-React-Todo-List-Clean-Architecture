import {useState} from "react";
import {LocalStorageGateway} from "@/modules/todo/infrastructure/gateways/local-storage.gateway.ts";
import {getTodosUseCase} from "@/modules/todo/domain/usecase/get-todos.usecase.ts";
import {useAppDispatch} from "@/store/store.tsx";
import {setTodos} from "@/modules/todo/userinterface/store/todo-slice.tsx";

const _getTodosUseCase = getTodosUseCase(new LocalStorageGateway());

const useTodoListPagePresenter = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isFetched, setIsFetched] = useState(false);

    const fetchTodos = async () => {
        const todos = await _getTodosUseCase.execute();
        dispatch(setTodos(todos));
        setIsLoading(false);
        setIsFetched(true);
    };

    if (!isFetched) {
        fetchTodos();
    }

    return {
        isLoading,
    }
};

export default useTodoListPagePresenter;
