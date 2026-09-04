import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Directory } from "@/components/sections/Directory";
import { BusinessCta } from "@/components/sections/BusinessCta";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

const TITLE = "GFV Training — Combat Sports Programs & Verified Gyms";
const DESCRIPTION =
  "Structured Muay Thai, strength, and recovery programs plus a verified network of gyms, coaches, and licensed physical therapists. Web, iOS, and Android.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Programs />
      <Directory />
      <BusinessCta />
      <TrustBadges />
      <Faq />
      <FinalCta />
    </main>
  );
}
