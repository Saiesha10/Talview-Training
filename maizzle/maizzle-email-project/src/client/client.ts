import { Connection, Client } from '@temporalio/client';
import { welcomeEmailWorkflow } from '../workflows/index.js';

async function triggerWelcome() {
  const email = "saiehha414@gmail.com";
  const username = "saiesha";

  const connection = await Connection.connect();
  const client = new Client({ connection });

  const handle = await client.workflow.start(welcomeEmailWorkflow, {
    args: [
      {
        email,
        username,
        verifyURL: `https://maizzle.com/docs/introduction`
      }
    ],
    taskQueue: 'email-task-queue',
    workflowId: `welcome-${email}-${Date.now()}`
  });

  console.log("Workflow started:", handle.workflowId);
  console.log("Open Temporal UI: http://localhost:8233");
}

triggerWelcome().catch(err => {
  console.error("Client error:", err);
  process.exit(1);
});
