import { Connection, ScheduleClient } from '@temporalio/client';

async function runSchedule() {
  const connection = await Connection.connect();
  const client = new ScheduleClient({ connection });

  const schedule = await client.create({
    scheduleId: 'daily-report',
    spec: { intervals: [{ every: '1 day' }] },
    action: {
      type: 'startWorkflow',
      workflowType: 'observabilityWorkflow',
      taskQueue: 'observability-demo',
    },
  });

  console.log('Schedule created:', schedule.scheduleId);
  const desc = await client.describe('daily-report');
  console.log(' Schedule Info:', desc);
  await client.trigger('daily-report');
}
runSchedule().catch(console.error);
