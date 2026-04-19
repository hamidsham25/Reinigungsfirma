/** Wird nur in Server Components gelesen und als Props an Client-Formulare übergeben. */

export type EmailJsLeadConfig = {
  serviceId: string;
  publicKey: string;
  templateId: string;
};

export type EmailJsBewerbungConfig = {
  serviceId: string;
  publicKey: string;
  templateId: string;
};

/** Nur direkte process.env.*-Zugriffe (keine dynamischen Keys). Optional Server-Aliase ohne NEXT_PUBLIC. */
export function getEmailJsLeadConfig(): EmailJsLeadConfig | null {
  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ||
    process.env.EMAILJS_SERVICE_ID?.trim();
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ||
    process.env.EMAILJS_PUBLIC_KEY?.trim();
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ||
    process.env.EMAILJS_TEMPLATE_ID_LEAD?.trim();
  if (!serviceId || !publicKey || !templateId) return null;
  return { serviceId, publicKey, templateId };
}

export function getEmailJsBewerbungConfig(): EmailJsBewerbungConfig | null {
  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ||
    process.env.EMAILJS_SERVICE_ID?.trim();
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ||
    process.env.EMAILJS_PUBLIC_KEY?.trim();
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_BEWERBUNG_TEMPLATE_ID?.trim() ||
    process.env.EMAILJS_TEMPLATE_ID_BEWERBUNG?.trim();
  if (!serviceId || !publicKey || !templateId) return null;
  return { serviceId, publicKey, templateId };
}
