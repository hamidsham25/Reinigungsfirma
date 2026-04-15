import emailjs from "@emailjs/browser";

type LeadPayload = Record<string, string>;

const requiredEnvKeys = [
  "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
  "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
  "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
] as const;

function getEmailConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const missing = requiredEnvKeys.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `EmailJS ist nicht konfiguriert. Fehlende Variablen: ${missing.join(", ")}`
    );
  }

  return { serviceId: serviceId!, templateId: templateId!, publicKey: publicKey! };
}

export async function sendLeadEmail(payload: LeadPayload) {
  const { serviceId, templateId, publicKey } = getEmailConfig();

  return emailjs.send(serviceId, templateId, payload, { publicKey });
}
