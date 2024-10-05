export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const updateCompleted = (todo: Todo, completed: boolean): Todo => ({
  ...todo,
  completed,
});
