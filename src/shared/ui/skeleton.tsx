import { cn } from "@/shared/ui/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted bg-gray-200", className)}
      {...props}
    />
  );
}

export { Skeleton };
