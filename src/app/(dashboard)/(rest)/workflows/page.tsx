import WorflowsList, {
  WorkflowsContainer,
} from "@/features/workflows/components/workflows";
import { prefetchWorflows } from "@/features/workflows/server/pre-fetch";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function WorkFlowPage() {
  prefetchWorflows();

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error....</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <WorflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
}
