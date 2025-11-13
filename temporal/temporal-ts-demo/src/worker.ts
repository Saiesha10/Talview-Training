import { Worker, Runtime, DefaultLogger } from '@temporalio/worker';
import { Connection } from '@temporalio/client';
import * as activities from './activities/index.ts';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Runtime.install({
  logger: new DefaultLogger('DEBUG', (entry) => {
    console.log(`[${new Date().toISOString()}] ${entry.message}`);
  }),
  sinks: {
    logger: {
      info: {
        fn(message: string) {
          console.log(`[Workflow Log] ${message}`);
        },
      },
    },
  },
});

async function run() {
  const connection = await Connection.connect();
  const worker = await Worker.create({
    connection,
    workflowsPath: path.join(__dirname, 'workflows'),
    activities,
    taskQueue: 'observability-demo',
  });

  console.log('Worker started with observability and custom logging');
  await worker.run();
}

run().catch(console.error);
