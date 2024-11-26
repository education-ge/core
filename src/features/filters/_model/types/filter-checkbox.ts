import { ReactNode } from "react";

export interface FilterCheckboxProps {
  className?: string;
  text: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}
