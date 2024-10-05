import {ChangeEvent, useState} from 'react';
import {createTodoUseCase} from '@/modules/todo/domain/usecase/create-todo.usecase';
import {useAppDispatch} from "@/store/store.tsx";
import {addTodo} from "@/modules/todo/userinterface/store/todo-slice.tsx";
import {LocalStorageGateway} from "@/modules/todo/infrastructure/gateways/local-storage.gateway.ts";

const _createTodoUseCase = createTodoUseCase(new LocalStorageGateway());

const useTodoFormPresenter = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const newTodo = await _createTodoUseCase.execute({title: value});
        dispatch(addTodo(newTodo));
        setValue('');
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return {
        value,
        onChange,
        onSubmit,
    }
};

export default useTodoFormPresenter;
