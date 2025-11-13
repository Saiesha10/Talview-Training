import { Worker, Runtime, DefaultLogger } from '@temporalio/worker';

import { fileURLToPath } from 'url';
import path from 'path';

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
  const worker = await Worker.create({
    workflowsPath: path.join(__dirname, './workflows/index.ts'),
    activitiesPath: path.join(__dirname, './activities/index.ts'),
    taskQueue: 'observability-demo',
  });

  console.log(' Worker started with observability and custom logging');
  await worker.run();
}

run().catch((err) => {
  console.error(' Worker failed:', err);
  process.exit(1);
});
