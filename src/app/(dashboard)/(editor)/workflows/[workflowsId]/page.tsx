import {
  Editor,
  EditorError,
  EditorLoading,
} from "@/features/editor/components/editor";
import EditorHeader from "@/features/editor/components/editor-header";
import { prefetchWorkflow } from "@/features/workflows/server/pre-fetch";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface PageProps {
  params: Promise<{
    workflowsId: string;
  }>;
}

export default async function WorkflowId({ params }: PageProps) {
  const { workflowsId } = await params;
  prefetchWorkflow(workflowsId);
  return (
    <div>
      <HydrateClient>
        <ErrorBoundary fallback={<EditorError />}>
          <Suspense fallback={<EditorLoading />}>
            <EditorHeader workflowId={workflowsId} />
            <main className="flex-1">
              <Editor workflowId={workflowsId} />
            </main>
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </div>
  );
}
