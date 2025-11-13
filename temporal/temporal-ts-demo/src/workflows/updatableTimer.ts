import { condition, sleep, setHandler, defineSignal } from '@temporalio/workflow';

const updateTimer = defineSignal<[number]>('update-timer');

export async function updatableTimerWorkflow(): Promise<void> {
  let duration = 10_000;
  let deadline = Date.now() + duration;

  setHandler(updateTimer, (newDuration) => {
    deadline = Date.now() + newDuration;
    console.log(`Timer updated to ${newDuration / 1000}s`);
  });

  while (Date.now() < deadline) {
    const remaining = deadline - Date.now();
    await Promise.race([sleep(remaining), condition(() => Date.now() >= deadline)]);
  }

  console.log('Timer expired');
}
