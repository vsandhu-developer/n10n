interface PageProps {
  params: Promise<{
    workflowsId: string;
  }>;
}

export default async function WorkflowId({ params }: PageProps) {
  const { workflowsId } = await params;
  return (
    <div>
      <h1>Workflows Id: {workflowsId}</h1>
    </div>
  );
}
