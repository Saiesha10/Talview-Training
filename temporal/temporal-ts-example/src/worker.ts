import { Worker } from '@temporalio/worker';
import path from 'path';

async function runWorker() {
  const worker = await Worker.create({
    workflowsPath: path.join(__dirname, './workflows/exampleWorkflow.ts'),
    activities: {}, 
    taskQueue: 'message-queue',
  });

  console.log(' Worker started on task queue: message-queue');
  await worker.run();
}

runWorker().catch((err) => {
  console.error(err);
  process.exit(1);
});
