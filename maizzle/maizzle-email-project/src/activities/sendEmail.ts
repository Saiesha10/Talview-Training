import { render } from "@maizzle/framework";
import { sendMail } from "../services/emailService.js";

export interface WelcomeEmailPayload {
  email: string;
  username: string;
  verifyURL: string;
}

export async function sendWelcomeEmail({
  email,
  username,
  verifyURL,
}: WelcomeEmailPayload): Promise<void> {
  
  const { html } = await render("../../emails/welcome.html", {
    build: {
      production: true, 
    },
    locals: {
      email,
      username,
      verifyURL,
      buttonText: "Verify Email",
    },
  });

  console.log("Rendered HTML Sample:", html.substring(0, 100)); // Optional debug

  await sendMail({
    to: email,
    subject: `Welcome, ${username}!`,
    html, 
  });
}
