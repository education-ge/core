"use client";

import { ChangeEvent, FC, useState } from "react";
import { cn } from "@/shared/ui/utils";
import { FilterCheckboxProps } from "../_model/types/filter-checkbox";
import { Input, Skeleton } from "@/shared/ui";
import { FilterCheckbox } from "./filter-checkbox";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  isLoading?: boolean;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  isLoading,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (isLoading) {
    return (
      <div className={cn(className)}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-2" />)}
      </div>
    );
  }

  const list = isExpanded
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : defaultItems.slice(0, limit);

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>
      {isExpanded && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchValue}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 max-h-48 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            checked={false}
            // onCheckedChange={() => onChange(item.value)}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={isExpanded ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary mt-3"
          >
            {isExpanded ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
