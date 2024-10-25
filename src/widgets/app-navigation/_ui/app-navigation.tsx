"use client";

import { Link, usePathname } from "@/shared/i18n/routing";
import { Button, Container } from "@/shared/ui";

const navItems = [
  { href: "/kindergartens", label: "Kindergartens" },
  { href: "/schools", label: "Schools" },
];

export const AppNavigation = () => {
  const pathname = usePathname();

  const buttonBaseClasses = "rounded-none border-b-2";

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <nav className="border-b">
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
              {item.label}
            </Button>
          </Link>
        ))}
      </Container>
    </nav>
  );
};
