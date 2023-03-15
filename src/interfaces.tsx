import { CSSProperties, ReactNode } from "react";

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface TodoType {
  id: string;
  text: string;
  isChecked: boolean;
}

export interface TodoItemType {
    id: string;
    style: CSSProperties;
    onDeleteTodo: (id: string) => void;
    onCheckTodo: (id: string) => void;
    isChecked: boolean;
    children?: ReactNode;
  };

//https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
export type Props = {
  children?: ReactNode;
};
