import { cancelScope, sleep } from '@temporalio/workflow';

export async function cancellableWorkflow(): Promise<string> {
  const scope = cancelScope(async () => {
    await sleep(5000);
    return 'completed';
  });

  await sleep(2000);
  scope.cancel();

  return 'cancelled';
}
