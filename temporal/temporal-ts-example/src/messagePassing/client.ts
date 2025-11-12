import { Connection, WorkflowClient } from '@temporalio/client';
import { setStatus, getStatus } from '../workflows/exampleWorkflow';

async function run() {
  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection });

  const handle = await client.start('exampleWorkflow', {
    taskQueue: 'message-queue',
    workflowId: 'example-1',
  });

  console.log(' Workflow started with ID:', handle.workflowId);
  await handle.signal(setStatus, 'processing');

  const result1 = await handle.query(getStatus);
  console.log('Status after signal:', result1);

  const result2 = await handle.result();
  console.log(' Workflow result:', result2);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
