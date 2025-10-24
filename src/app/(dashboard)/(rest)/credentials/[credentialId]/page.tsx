interface PageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

export default async function Credentials({ params }: PageProps) {
  const { credentialId } = await params;
  return (
    <div>
      <h1>Credential Id: {credentialId}</h1>
    </div>
  );
}
