import { FilterSearchParams } from "@/features/filters/server";
import { AppFooter } from "@/widgets/app-footer";
import { AppHeader } from "@/widgets/app-header/server";
import { TopbarFilters } from "@/widgets/filters/client";

export default async function Layout({
  children,
  searchParams,
}: {
  children: React.ReactNode;
  searchParams: Promise<FilterSearchParams>;
}) {
  const resolvedSearchParams = (await searchParams) || {};

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader navigation />
      <TopbarFilters searchParams={resolvedSearchParams} />
      <main className="flex-grow">{children}</main>
      <AppFooter />
    </div>
  );
}
