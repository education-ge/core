"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useRef, useState } from "react";
import Image from "next/image";
import { useClickAway } from "react-use";

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  // const t = useTranslations("LanguageSwitcher");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const availableLocales = [
    { code: "en", name: "English" },
    { code: "ge", name: "ქართული" },
    { code: "ru", name: "Русский" },
  ];

  const changeLanguage = (newLocale: string) => {
    setIsOpen(false);

    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.replace(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <Image
          width={40}
          height={40}
          alt={`Language ${locale}`}
          src={`/flags/${locale}.svg`}
        />
      </button>

      {isOpen && (
        <ul
          ref={ref}
          className="absolute left-1/2 transform -translate-x-1/2 bg-white border mt-2 w-24 rounded-md"
        >
          {availableLocales.map((lang) => (
            <li key={lang.code}>
              <button
                className="flex items-center gap-1 text-left py-2 px-4 hover:bg-gray-100"
                onClick={() => changeLanguage(lang.code)}
              >
                <Image
                  width={40}
                  height={40}
                  alt={`Language ${lang.name}`}
                  src={`/flags/${lang.code}.svg`}
                />
                {lang.code.toLocaleUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
