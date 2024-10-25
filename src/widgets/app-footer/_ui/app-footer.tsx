import { Container } from "@/shared/ui";
import { FC } from "react";

export const AppFooter: FC = () => {
  return (
    <header className="w-full bg-blue-400 mt-4">
      <Container className="flex items-center justify-between py-2">
        Footer
      </Container>
    </header>
  );
};
