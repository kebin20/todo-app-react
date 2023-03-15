export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface TodoType {
  id: string;
  text: string;
  isChecked:boolean;
}
