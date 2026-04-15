import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/content";

export default function KitaPage() {
  const service = services.find((item) => item.key === "kita");

  if (!service) {
    return null;
  }

  return <ServicePageTemplate service={service} />;
}
