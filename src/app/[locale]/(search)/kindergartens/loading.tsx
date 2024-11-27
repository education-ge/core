import { Container, Skeleton } from "@/shared/ui";
import { InstitutionList } from "@/widgets/institution-list";

export default function Loading() {
  return (
    <Container className="mt-4 flex">
      <Skeleton className="w-80 h-96 rounded-xl" />
      <div className="flex-1 ml-4">
        <InstitutionList isLoading={true}>
          <Skeleton />
        </InstitutionList>
      </div>
    </Container>
  );
}
