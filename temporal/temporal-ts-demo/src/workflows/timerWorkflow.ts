import { sleep } from '@temporalio/workflow';

export async function timerWorkflow(): Promise<void> {
  console.log(' Waiting for 30 seconds...');
  await sleep(30_000);
  console.log('Timer completed');
}
