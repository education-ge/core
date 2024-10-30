"use client";

import { Button } from "@/shared/ui";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export const CitySwitcher = () => {
  const t = useTranslations("Common");

  return (
    <Button
      variant="secondary"
      className="flex items-center gap-1 bg-blue-200 hover:bg-blue-200 cursor-default"
    >
      <MapPin />
      <span className="text-lg font-semibold">{t("city.tbilisi")}</span>
    </Button>
  );
};
