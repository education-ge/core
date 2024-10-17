"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const availableLocales = [
    { code: "en", name: "English" },
    { code: "ge", name: "Georgian" },
    { code: "ru", name: "Русский" },
  ];

  const changeLanguage = (newLocale: string) => {
    setIsOpen(false);

    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.replace(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-200 text-black py-2 px-4 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t("currentLanguage")}:{" "}
        {availableLocales.find((l) => l.code === locale)?.name}
      </button>

      {isOpen && (
        <ul className="absolute bg-white border mt-2 w-full">
          {availableLocales.map((lang) => (
            <li key={lang.code}>
              <button
                className="block w-full text-left py-2 px-4 hover:bg-gray-100"
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
