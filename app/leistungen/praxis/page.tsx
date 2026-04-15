import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";

export default function PraxisPage() {
  const service = services.find((item) => item.key === "praxis");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
