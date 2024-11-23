import iphoneLinks from "@/assets/hintenlinks.png";
import Style from "./productHero.module.css";
import Image from "next/image";
import { TitelComponent, titelStyle } from "../titel/titel";

export default function ProductHero() {
  return (
    <>
      <div className={Style["productHeroWrapper"]}>
        <div className={Style["gridContainer"]}>
          <div className={Style["imageContainer"]}>
            <Image
              src={iphoneLinks}
              alt="Iphone zeigt man der Gewichte stämmt"
              className={Style["image"]}
            />
          </div>
          <div className={Style["textContainer"]}>
            <TitelComponent
              style={titelStyle.PRIMARY}
              label={"The Story Behind StepSync"}
            />
            <p className={Style["description"]}>
              The Story Behind StepSync began with a passion for helping people
              stay in sync with their goals. We created a platform that empowers
              users to track progress and stay motivated. Every feature is
              designed to make each step count, ensuring a seamless journey
              toward success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
