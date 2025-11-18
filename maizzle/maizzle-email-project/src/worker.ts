// src/worker.ts
import { Worker } from "@temporalio/worker";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runWorker() {
  const activities = await import("./activities/sendEmail.js");

  const worker = await Worker.create({
    workflowsPath: path.resolve(__dirname, "workflows"),
    activities,
    taskQueue: "email-task-queue",
  });

  console.log("Worker started and listening on task queue: email-task-queue");
  await worker.run();
}

runWorker().catch((err) => {
  console.error("Worker failed:", err);
  process.exit(1);
});
