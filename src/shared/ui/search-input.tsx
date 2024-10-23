"use client";

import { FC, useRef, useState } from "react";
import { cn } from "@/shared/ui/utils";
import { Search } from "lucide-react";
import { useClickAway, useDebounce } from "react-use";
import Image from "next/image";
import { kindergartenService } from "@/entities/kindergarten";
import { Kindergarten } from "@prisma/client";
import { Link } from "@/shared/i18n/routing";
import { useLocale } from "next-intl";

interface Props {
  className?: string;
}

export const SearchInput: FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [items, setItems] = useState<Kindergarten[]>([]);
  const locale = useLocale();
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsFocused(false);
  });

  useDebounce(
    () => {
      kindergartenService.search(locale, searchQuery).then((items) => {
        setItems(items);
      });
    },
    300,
    [locale, searchQuery],
  );

  // const onClickItem = () => {
  //   setIsFocused(false);
  //   setSearchQuery("");
  //   setItems([]);
  // };

  return (
    <>
      {isFocused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        className={cn(
          "flex flex-1 rounded-sm justify-between relative h-11 z-30",
          className,
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          ref={ref}
          className="rounded-lg outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {items.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-lg py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              isFocused && "visible opacity-100 top-12",
            )}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                // onClick={onClickItem}
                href={`/kindergartens/${item.id}`}
                className="flex items-center gap-4 px-3 py-2 hover:bg-primary/10 cursor-pointer"
              >
                <Image
                  src={`/${item.thumbnail}`}
                  alt={item.name}
                  className="object-cover"
                  width={120}
                  height={120}
                />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
