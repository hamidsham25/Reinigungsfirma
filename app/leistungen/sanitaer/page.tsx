import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";

export default function SanitaerPage() {
  const service = services.find((item) => item.key === "sanitaer");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
