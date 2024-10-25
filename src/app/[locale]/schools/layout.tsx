import { AppNavigation } from "@/widgets/app-navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNavigation />
      {children}
    </>
  );
}
