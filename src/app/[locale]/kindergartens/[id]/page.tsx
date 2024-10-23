import { Container } from "@/shared/ui";

export default function KindergartenPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Container className="mt-4 flex">
      <p>{id}</p>
    </Container>
  );
}
