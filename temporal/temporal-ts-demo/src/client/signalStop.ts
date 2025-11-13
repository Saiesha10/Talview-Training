import { Connection, WorkflowClient } from '@temporalio/client';

async function sendSignal() {
  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection });
  const handle = client.getHandle('timerRace-workflow-id');
  await handle.signal('stop');
  console.log('Stop signal sent');
}
sendSignal();
