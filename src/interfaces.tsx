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

//https://stackoverflow.com/questions/63739711/type-string-has-no-properties-in-common-with-type-propertiesreacttext-strin
export interface TodoListType {
  style?: CSSProperties;
  onClearCompleted?: () => void;
  onDeleteTodo: (id: string) => void;
  onCheckTodo: (id: string) => void;
  items: {
    id: string;
    text: string;
    isChecked: boolean;
  }[];
}

export interface TodoItemType extends TodoListType {
  isChecked: boolean;
  children?: ReactNode;
  id: string;
}

//https://stackoverflow.com/questions/73267615/typescript-button-element-type-attribute
export interface ButtonComponentType {
  isChecked?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

//https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
export type Props = {
  children?: ReactNode;
};
