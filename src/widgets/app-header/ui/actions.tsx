import { LanguageSwitcher } from "@/features/i18n/client";

export const Actions = () => {
  return (
    <div className="flex items-center gap-2">
      <LanguageSwitcher />
      {/* <Button>
        <Heart />
      </Button>
      <Button variant="outline" className="flex items-center gap-1">
        <User />
        <span>Profile</span>
      </Button> */}
    </div>
  );
};
