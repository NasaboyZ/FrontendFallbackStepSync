"use client";
import Style from "./tablehero.module.css";
import Image from "next/image";
import iphonefront from "@/assets/phone-front.png";
import iphonehintellinks from "@/assets/hintenlinks.png";
import iphonehintenrechts from "@/assets/hintenrechts.png";
import { Button, ButtonStyle } from "../../button/button";
import { motion } from "framer-motion";
import HeroSectionText from "../heroSectionText/heroSectionText";
import { TitelComponent } from "@/components/titel/titel";

export default function TabletHero() {
  return (
    <>
      <div className={Style["tablet_hero"]}>
        <TitelComponent style="secondary" label="Tracke deinen Erfolg" />

        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <Button label="Registrieren" style={ButtonStyle.SECONDARY}></Button>
        </motion.div>

        <motion.div
          className={Style["hero_image_bg_left"]}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={iphonehintellinks}
            width={380}
            height={380}
            alt="Hinten Links Bild"
          />
        </motion.div>

        <motion.div
          className={Style["hero_image_bg_right"]}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={iphonehintenrechts}
            width={380}
            height={380}
            alt="Hinten Rechts Bild"
          />
        </motion.div>

        <motion.div
          className={Style["hero_image_front"]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={iphonefront}
            width={380}
            height={380}
            alt="Vorderseite des Handys"
          />
        </motion.div>
      </div>
      <HeroSectionText />
    </>
  );
}
