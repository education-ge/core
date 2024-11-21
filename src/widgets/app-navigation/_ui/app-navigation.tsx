"use client";

import { Link, usePathname } from "@/shared/i18n/routing";
import { Button, Container } from "@/shared/ui";
import { useTranslations } from "next-intl";

const navItems = [
  { href: "/kindergartens", label: "kindergartens" },
  { href: "/schools", label: "schools" },
];

export const AppNavigation = () => {
  const t = useTranslations("Common");
  const pathname = usePathname();

  const buttonBaseClasses = "rounded-none border-b-2";

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <nav className="border-b sticky top-0 z-20 bg-white">
      <Container className="flex justify-center">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <Button
              variant="ghost"
              className={`${buttonBaseClasses} ${
                isActive(item.href) ? "border-red-700" : "border-transparent"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {t(item.label)}
            </Button>
          </Link>
        ))}
      </Container>
    </nav>
  );
};
