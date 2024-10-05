import {Input} from "@/shared/components/ui/input.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import useTodoFormPresenter from "@/modules/todo/userinterface/components/todo-form/use-todo-form.presenter.tsx";
import {Label} from "@/shared/components/ui/label.tsx";

const TodoForm = () => {
    const { value, onChange, onSubmit } = useTodoFormPresenter();

    return (
        <form onSubmit={onSubmit}>
            <Label htmlFor="todo-list-form-input">Add a todo</Label>
            <Input
                id="todo-list-form-input"
                name="todo-list-form-input"
                type="text" value={value}
                onChange={onChange} />
            <Button type="submit" className="mt-5">Add</Button>
        </form>
    );
};

export default TodoForm;
