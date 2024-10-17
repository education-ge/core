import { Checkbox } from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import { FC } from "react";
import { FilterCheckboxProps } from "../model/types/filter-checkbox";

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  className,
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className={cn("rounded w-5 h-5", className)}
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
