import { Connection, WorkflowClient } from '@temporalio/client';

async function startWorkflow() {
  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection });

  const handle = await client.start('observabilityWorkflow', {
    taskQueue: 'observability-demo',
    workflowId: 'obs-' + Date.now(),
  });

  console.log(' Workflow started:', handle.workflowId);
}
startWorkflow().catch(console.error);
