import { InputHTMLAttributes } from "react";

export interface Props<T> extends InputHTMLAttributes<T> {
  name: string;
  label: string;
  icon?: string;
  onIconClicked?: () => void;
}
