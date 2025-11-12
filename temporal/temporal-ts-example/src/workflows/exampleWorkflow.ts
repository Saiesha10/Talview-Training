import { defineSignal, defineQuery, setHandler } from '@temporalio/workflow';

export const setStatus = defineSignal<[string]>('setStatus');
export const getStatus = defineQuery<string>('getStatus');

let status = 'initialized';

export async function exampleWorkflow(): Promise<string> {
  setHandler(setStatus, (s: string) => {
    status = s;
  });
  setHandler(getStatus, () => status);


  await new Promise((resolve) => setTimeout(resolve, 1000));
  status = 'done';
  return status;
}
