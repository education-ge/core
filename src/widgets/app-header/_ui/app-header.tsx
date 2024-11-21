import { Container } from "@/shared/ui";
import { FC } from "react";
import { Logo } from "./logo";
import { Search } from "./search";
import { Actions } from "./actions";
import { Navigation } from "./navigation";

interface Props {
  search?: boolean;
  navigation?: boolean;
  className?: string;
}

export const AppHeader: FC<Props> = ({ search, navigation }) => {
  return (
    <header className="w-full border-b bg-gray-900">
      <Container className="flex items-center justify-between">
        <Logo />
        {navigation && <Navigation />}
        {search && <Search />}
        <Actions />
      </Container>
    </header>
  );
};
