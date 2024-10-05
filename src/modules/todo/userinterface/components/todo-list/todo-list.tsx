import useTodoListPresenter from "@/modules/todo/userinterface/components/todo-list/use-todo-list.presenter.tsx";
import TodoListItem from "@/modules/todo/userinterface/components/todo-list-item/todo-list-item.tsx";

const TodoList = () => {
    const { todos } = useTodoListPresenter();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="list-disc">
                    <TodoListItem todo={todo} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
