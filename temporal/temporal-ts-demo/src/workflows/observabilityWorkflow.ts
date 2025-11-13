import { proxySinks,proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/index.ts';
const { logger } = proxySinks();

export async function observabilityWorkflow(): Promise<void> {
  logger.info('Workflow started');
  await new Promise((r) => setTimeout(r, 1000));
  const { exampleActivity } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});
  logger.info('Workflow completed successfully');
}
