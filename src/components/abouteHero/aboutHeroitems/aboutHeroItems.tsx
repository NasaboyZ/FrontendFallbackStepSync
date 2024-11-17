import { TitelComponent, titelStyle } from "@/components/titel/titel";
import drinkflasche from "@/assets/drink-flasche.png";
import Image from "next/image";
import Style from "./aboutHero.module.css";

export default function AboutHeroItems() {
  return (
    <div className={Style.aboutHeroWrapper}>
      <div className={Style.gridContainer}>
        <div className={Style.imageContainer}>
          <Image
            src={drinkflasche}
            width={500}
            height={500}
            alt="Drinkflasche mit grüner Farbe und schwarzem Deckel"
            className={Style.image}
          />
        </div>
        <div className={Style.textContainer}>
          <TitelComponent
            style={titelStyle.PRIMARY}
            label={"The Story Behind StepSync"}
          />
          <p className={Style.description}>
            The Story Behind StepSync began with a passion for helping people
            stay in sync with their goals. We created a platform that empowers
            users to track progress and stay motivated. Every feature is
            designed to make each step count, ensuring a seamless journey toward
            success.
          </p>
        </div>
      </div>
    </div>
  );
}
