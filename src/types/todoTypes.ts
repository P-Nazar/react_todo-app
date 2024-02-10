export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type AddTodo = (newTodo: Todo) => void;

export type RemoveTodo = (id: number) => void;

export type EditTodo = (id: number, newText: string) => void;
