import { Container } from "@/shared/ui";
import { FC } from "react";
import { Logo } from "./logo";
import { Search } from "./search";
import { Actions } from "./actions";

export const AppHeader: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-300">
      <Container className="flex items-center justify-between py-2">
        <Logo />
        <Search />
        <Actions />
      </Container>
    </header>
  );
};
