"use client";

import { FC, useRef, useState } from "react";
import { cn } from "@/shared/ui/utils";
import { useClickAway, useDebounce } from "react-use";
import Image from "next/image";
import { Link } from "@/shared/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useGetInstitutionsByText } from "@/entities/institution/client";

interface Props {
  className?: string;
}

export const SearchInput: FC<Props> = ({ className }) => {
  const t = useTranslations("SearchInput");
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const locale = useLocale();
  const ref = useRef(null);

  useDebounce(
    () => {
      setDebouncedSearchText(searchText);
    },
    300,
    [searchText],
  );

  // const { data: items = [] } = useGetInstitutionsByText({
  //   locale,
  //   searchText: debouncedSearchText,
  // });
  const items = [];

  useClickAway(ref, () => {
    setIsFocused(false);
  });

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
        <Image
          src={"/svg/search.svg"}
          alt="search"
          width={25}
          height={25}
          className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"
        />
        <input
          ref={ref}
          className="rounded-lg outline-none w-full pl-11"
          type="text"
          placeholder={t("placeholder")}
          onFocus={() => setIsFocused(true)}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
                key={`${item.type}/${item.id}`}
                href={`/${item.type}s/${item.id}`}
                className="flex items-center gap-4 px-3 py-2 hover:bg-primary/10 cursor-pointer"
              >
                <div className="w-[90px] h-[60px] relative flex-shrink-0 overflow-hidden rounded-md flex justify-center items-center">
                  {item.thumbnail ? (
                    <Image
                      src={`/${item.thumbnail}`}
                      alt={item.name}
                      className="object-cover"
                      layout="fill"
                    />
                  ) : (
                    <Image
                      src={"/svg/no-image.svg"}
                      alt="no-image-icon"
                      width={60}
                      height={60}
                    />
                  )}
                </div>
                <div className="flex items-center justify-between flex-grow">
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
