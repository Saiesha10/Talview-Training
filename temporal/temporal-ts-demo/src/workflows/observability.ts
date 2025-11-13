import { proxySinks } from '@temporalio/workflow';
const { logger } = proxySinks();

export async function observabilityWorkflow(): Promise<void> {
  logger.info('Workflow started');
  await new Promise((r) => setTimeout(r, 1000));
  logger.info('Workflow completed successfully');
}
