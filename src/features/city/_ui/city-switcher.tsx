"use client";

import { Button } from "@/shared/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const CitySwitcher = () => {
  const t = useTranslations("Common");

  return (
    <Button
      variant={"ghost"}
      className="flex items-center gap-1 text-white hover:bg-gray-800 hover:text-white"
    >
      <Image
        src={"/svg/location-pin.svg"}
        alt="location-pin"
        width={20}
        height={20}
      />
      <span>City:</span>
      <span className="text-md font-semibold">{t("city.tbilisi")}</span>
    </Button>
  );
};
