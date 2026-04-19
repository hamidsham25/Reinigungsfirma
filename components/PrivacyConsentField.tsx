"use client";

import Link from "next/link";

type Variant = "contact" | "application";

type Props = {
  variant: Variant;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function PrivacyConsentField({
  variant,
  checked,
  onChange,
}: Props) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-snug text-slate-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 size-4 shrink-0 rounded border-slate-300 text-[#1B4F72] focus:ring-[#1B4F72]"
      />
      <span>
        {variant === "contact" ? (
          <>
            Ich habe die{" "}
            <Link
              href="/datenschutz"
              className="font-medium text-[#1B4F72] underline underline-offset-2 hover:text-[#163f5b]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung
            </Link>{" "}
            zur Kenntnis genommen. *
          </>
        ) : (
          <>
            Ich habe die{" "}
            <Link
              href="/datenschutz"
              className="font-medium text-[#1B4F72] underline underline-offset-2 hover:text-[#163f5b]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung
            </Link>{" "}
            gelesen, insbesondere den Abschnitt zu Bewerbungen. *
          </>
        )}
      </span>
    </label>
  );
}
