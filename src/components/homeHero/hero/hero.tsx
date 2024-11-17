"use client";

import HeroItems from "../heroitems/heroItems";
import Tablethero from "../tabletHero/tablethero";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";

export default function Hero() {
  // Verwende die benutzerdefinierte Media Query für die Tablet-Größe
  const isTabletOrMobile = useClientMediaQuery(
    "only screen and (max-width: 768px)"
  );

  return <>{isTabletOrMobile ? <Tablethero /> : <HeroItems />}</>;
}
