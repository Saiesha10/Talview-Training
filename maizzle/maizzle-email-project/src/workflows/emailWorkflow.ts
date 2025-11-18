import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/sendEmail.js';

const { sendWelcomeEmail } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
  retry: {
    maximumAttempts: 1,
  },
});

export async function welcomeEmailWorkflow({
  email,
  username,
  verifyURL,
}: {
  email: string;
  username: string;
  verifyURL: string;
}): Promise<void> {
  await sendWelcomeEmail({
    email,
    username,
    verifyURL,
  });
}
