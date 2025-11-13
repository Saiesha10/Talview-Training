import { sleep, condition, defineSignal, setHandler } from '@temporalio/workflow';

const stopSignal = defineSignal('stop');

export async function timerRaceWorkflow(): Promise<string> {
  let stopped = false;
  setHandler(stopSignal, () => (stopped = true));

  console.log(' Waiting for signal or timeout...');
  await Promise.race([sleep(10_000), condition(() => stopped)]);

  return stopped ? 'Stopped early by signal' : 'Timer completed';
}
