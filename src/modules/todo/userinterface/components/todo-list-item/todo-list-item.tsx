import {Todo} from "@/modules/todo/domain/entities/todo.entity.ts";
import {Button} from "@/shared/components/ui/button.tsx";
import useTodoListItemPresenter from "@/modules/todo/userinterface/components/todo-list-item/use-todo-list-item.presenter.tsx";
import {cn} from "@/shared/lib/utils.ts";

type TodoListItemProps = {
    todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
    const { deleteTodo, completeTodo } = useTodoListItemPresenter();

    return (
        <div className="flex items-center gap-2">
            <span className={cn({
                "line-through": todo.completed,
            })}>{todo.title}</span>
            <Button
                type="button"
                variant='outline'
                size="sm"
                onClick={() => completeTodo(todo)}>
                Complete
            </Button>
            <Button
                type="button"
                variant='outline'
                size="sm"
                onClick={() => deleteTodo(todo.id)}>
                X
            </Button>
        </div>
    );
};

export default TodoListItem;
