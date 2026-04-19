/** Client-seitige Validierung und leichter Spam-Schutz (kein Ersatz für ein Backend). */

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/** Fläche in m²: positive Zahl, Komma oder Punkt als Dezimaltrenner. */
export function parseFlaecheM2(raw: string): number | null {
  const n = raw.trim().replace(",", ".");
  if (!/^\d+(\.\d+)?$/.test(n)) return null;
  const v = Number.parseFloat(n);
  if (!Number.isFinite(v) || v <= 0 || v > 1_000_000) return null;
  return v;
}

export function isValidEmail(s: string): boolean {
  const t = s.trim();
  if (t.length < 5 || t.length > 254) return false;
  return EMAIL_RE.test(t);
}

/** Bewerbung „Telefon oder E-Mail“: bei @ gültige E-Mail, sonst erlaubte Telefonzeichen. */
export function isValidKontakt(s: string): boolean {
  const t = s.trim();
  if (t.length < 6 || t.length > 200) return false;
  if (t.includes("@")) return isValidEmail(t);
  return /^[+()\d\s\-/]{6,}$/.test(t);
}

const RATE_KEYS = {
  lead: "rein_form_rate_lead",
  hero: "rein_form_rate_hero",
  job: "rein_form_rate_job",
} as const;

/** Prüft, ob seit dem letzten erfolgreichen Absenden genug Zeit vergangen ist. */
export function isOutsideRateLimit(
  key: keyof typeof RATE_KEYS,
  minIntervalMs: number
): boolean {
  if (typeof window === "undefined") return true;
  const last = Number.parseInt(sessionStorage.getItem(RATE_KEYS[key]) ?? "0", 10);
  return Date.now() - last >= minIntervalMs;
}

/** Nach erfolgreichem Versand aufrufen. */
export function recordSuccessfulSubmit(key: keyof typeof RATE_KEYS): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(RATE_KEYS[key], String(Date.now()));
}

export function isLikelySpamHoneypot(value: string): boolean {
  return value.trim().length > 0;
}

export function isTooFast(msSinceOpen: number, minMs: number): boolean {
  return msSinceOpen < minMs;
}
