import TodoForm from "@/modules/todo/userinterface/components/todo-form/todo-form.tsx";
import TodoList from "@/modules/todo/userinterface/components/todo-list/todo-list.tsx";
import useTodoListPagePresenter from "@/modules/todo/userinterface/pages/todo-list-form/use-todo-list-page.presenter.tsx";

const TodoListPage = () => {
    const { isLoading } = useTodoListPagePresenter();

    if (isLoading) return <p>Loading...</p>;
    return (
        <div className="w-[500px] mx-auto mt-10">
            <TodoForm />
            <section className="mt-10">
                <TodoList />
            </section>
        </div>
    );
};

export default TodoListPage;
