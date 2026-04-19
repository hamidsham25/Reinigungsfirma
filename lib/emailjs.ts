import emailjs from "@emailjs/browser";
import type { EmailJsBewerbungConfig, EmailJsLeadConfig } from "@/lib/emailjs-config";

type LeadPayload = Record<string, string>;

/** Kontakt / Schnellanfrage — Zugangsdaten kommen aus der Server Page (Props), nicht aus process.env im Client-Bundle. */
export async function sendLeadEmail(payload: LeadPayload, creds: EmailJsLeadConfig) {
  return emailjs.send(creds.serviceId, creds.templateId, payload, {
    publicKey: creds.publicKey,
  });
}

/** Bewerbung inkl. optionalem PDF: im EmailJS-Template „Form File Attachment“, Parametername wie file-Input (bewerbung_anhang). */
export async function sendBewerbungForm(
  form: HTMLFormElement,
  creds: EmailJsBewerbungConfig
) {
  return emailjs.sendForm(creds.serviceId, creds.templateId, form, {
    publicKey: creds.publicKey,
  });
}

export type { EmailJsBewerbungConfig, EmailJsLeadConfig };
