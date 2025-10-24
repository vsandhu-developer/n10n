interface PageProps {
  params: Promise<{
    executionId: string;
  }>;
}

export default async function Execution({ params }: PageProps) {
  const { executionId } = await params;
  return (
    <div>
      <h1>Execution Id: {executionId}</h1>
    </div>
  );
}
