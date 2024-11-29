"use client";

import { ChangeEvent, FC, useState } from "react";
import { cn } from "@/shared/ui/utils";
import { Input, Skeleton } from "@/shared/ui";
import { FilterCheckbox } from "./filter-checkbox";
import { useTranslations } from "next-intl";
import { FilterCheckboxProps } from "../_model/types/filter-checkbox";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  isLoading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  name?: string;
  selected?: Set<string>;
  className?: string;
}

export const CheckboxGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  isLoading,
  searchInputPlaceholder,
  onClickCheckbox,
  name,
  selected,
  className,
}) => {
  const t = useTranslations("Filters");

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
          .map((_, index) => <Skeleton key={index} className="h-5 mb-2" />)}
      </div>
    );
  }

  const list = isExpanded
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>
      {isExpanded && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchValue}
            placeholder={
              searchInputPlaceholder || t("checkboxGroup.placeholder")
            }
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
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            endAdornment={item.endAdornment}
            name={name}
            checked={selected?.has(item.value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={isExpanded ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary mt-3"
          >
            {isExpanded ? t("checkboxGroup.hide") : t("checkboxGroup.showAll")}
          </button>
        </div>
      )}
    </div>
  );
};
