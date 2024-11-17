import { create } from "zustand";
import { StaticImageData } from "next/image";
import manInRollstuhl from "@/assets/man-Rollstuhl.jpg";
import aboutImage from "@/assets/jogger.jpg";
import productImage from "@/assets/man-nimmt-gewicht-auf.jpg";

export interface ContentData {
  text: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

interface ContentStore {
  contentData: Record<string, ContentData>;
  getContent: (pageKey: string) => ContentData | undefined;
}

const useContentStore = create<ContentStore>((set, get) => ({
  contentData: {
    homePage: {
      text: "Bist du bereit, deine Fitnessziele zu rocken? Bei Stepsync geht es um mehr als nur Training,es geht um die beste Version von dir! Finde Workouts, die zu dir passen, teile deine Erfolge und stürze dich in aufregende Challenges. Werde Teil unserer Community und starte heute durch, dein neues Ich wartet!",
      imageSrc: manInRollstuhl,
      imageAlt: "Ein Mann, der auf einem Rollstuhl sitzt",
    },
    aboutPage: {
      text: "Bei StepSync ist es unsere Mission, Menschen dabei zu unterstützen, ihre Ziele zu erreichen, indem wir ihnen Werkzeuge zur Verfügung stellen, mit denen sie Fortschritte effektiv verfolgen und verwalten können. Wir glauben, dass jeder Schritt, egal wie klein, zum Erfolg beiträgt, wenn er mit einem klaren Ziel verbunden ist.",
      imageSrc: aboutImage,
      imageAlt: "Ein Mann, der joggt und amputierte Beine hat",
    },
    productPage: {
      text: "Bei StepSync ist es unsere Mission, Menschen dabei zu befähigen, ihre Ziele zu erreichen, indem wir ihnen Werkzeuge zur Verfügung stellen, mit denen sie Fortschritte effektiv verfolgen und verwalten können. Wir sind überzeugt, dass jeder Schritt, egal wie klein, zum Erfolg beiträgt, wenn er mit einem klaren Ziel verbunden ist.",
      imageSrc: productImage,
      imageAlt: "Ein Mann stemmt Gewichte und hat eine athletische Figur",
    },
  },
  getContent: (pageKey: string) => get().contentData[pageKey],
}));

export default useContentStore;
