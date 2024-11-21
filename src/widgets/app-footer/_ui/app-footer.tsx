import { Container } from "@/shared/ui";
import { FC } from "react";

export const AppFooter: FC = () => {
  return (
    <footer className="w-full bg-gray-900 mt-4">
      <Container className="flex items-center justify-between py-2 text-white">
        Footer
      </Container>
    </footer>
  );
};
