import SectionItems from "@/components/ContentSection/contentSectionItems/sectionItems";
import ProductHero from "@/components/productHero/productHero";

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <SectionItems pageKey="productPage" />
    </>
  );
}
