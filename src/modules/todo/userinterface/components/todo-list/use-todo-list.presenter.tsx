import {useAppSelector} from "@/store/store.tsx";

const useTodoListPresenter = () => {
    const { todos } = useAppSelector((state) => state.todo);

    return {
        todos,
    }
};

export default useTodoListPresenter;
