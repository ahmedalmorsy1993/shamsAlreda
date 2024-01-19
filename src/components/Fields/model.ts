import { InputHTMLAttributes } from "react";

export interface Props<T> extends InputHTMLAttributes<T> {
  name: string;
  icon?: string;
  onIconClicked?: () => void;
  errors?: Record<string, any>;
}
