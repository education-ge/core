import { CitySwitcher } from "@/features/city/server";
import { LanguageSwitcher } from "@/features/i18n/client";

export const Actions = () => {
  return (
    <div className="flex items-center gap-2">
      <CitySwitcher />
      <LanguageSwitcher />
    </div>
  );
};
