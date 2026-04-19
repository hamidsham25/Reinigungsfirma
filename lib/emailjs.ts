import emailjs from "@emailjs/browser";

type LeadPayload = Record<string, string>;

const coreEnvKeys = [
  "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
  "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
] as const;

function getEmailJsCore() {
  const missing = coreEnvKeys.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `EmailJS ist nicht konfiguriert. Fehlende Variablen: ${missing.join(", ")}`
    );
  }

  return {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  };
}

export async function sendLeadEmail(payload: LeadPayload) {
  const { serviceId, publicKey } = getEmailJsCore();
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  if (!templateId) {
    throw new Error(
      "EmailJS ist nicht konfiguriert. Fehlende Variable: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"
    );
  }

  return emailjs.send(serviceId, templateId, payload, { publicKey });
}

/** Bewerbung inkl. optionalem PDF: im EmailJS-Template „Form File Attachment“ mit gleichem Parameternamen wie das file-Input (z. B. bewerbung_anhang). */
export async function sendBewerbungForm(form: HTMLFormElement) {
  const { serviceId, publicKey } = getEmailJsCore();
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_BEWERBUNG_TEMPLATE_ID;
  if (!templateId) {
    throw new Error(
      "EmailJS Bewerbung: Fehlende Variable NEXT_PUBLIC_EMAILJS_BEWERBUNG_TEMPLATE_ID"
    );
  }

  return emailjs.sendForm(serviceId, templateId, form, { publicKey });
}
