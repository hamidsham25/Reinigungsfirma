import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";

export default function BueroPage() {
  const service = services.find((item) => item.key === "buero");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
