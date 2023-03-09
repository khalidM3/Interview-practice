import Image from "next/image";
import AstronautImg from "@/assets/astronaut.jpg";
import PlanetSvg from "@/assets/planet.svg";
import ImageScroll from "../ImageScroll";

import RightSvg from "@/assets/right.svg";
import styles from "./MainContent.module.css";
import Link from "next/link";
import { Photo } from "@/nasa";

export interface MainContentProps {
  photos: Array<Photo>;
}

export default function MainContent({ photos }: MainContentProps) {
  return (
    <main className={styles.container}>
      <section className={styles.leftContent}>
        <div className={styles.breadcrumb}>
          <span> Galleries · </span>
          Space Database
        </div>
        <Image src={AstronautImg} alt="astronaut" />
      </section>

      <section className={styles.rightContent}>
        <div className={styles.rightContentTitleContainer}>
          <Image width={100} src={PlanetSvg} alt="planet" />
          <div className={styles.title}>
            <h3 className={styles.titleHeading}> NASA Space Database </h3>
            <span className={styles.subHeading}> Our Public Gallery for Outer Space </span>
          </div>
        </div>

        <p>
          We want to see space through your eyes! Take photos and upload them to
          our public library. Our goal is to provide the largest database of
          quality images. Space is amazing! Let’s capture it together!
        </p>

        <div>
          <div className={styles.title}>
            <h3 className={styles.titleHeading}> Featured Images </h3>
            <span className={styles.subHeading}> Scroll to see more </span>
          </div>
            <ImageScroll photos={photos} />
            <div
             className={styles.viewGalleryContainer}
            >
              <Link className={styles.viewGalleryLink} href="/gallery/featured"> View Gallery </Link>
              <Image width={10} src={RightSvg} alt="right-icon" />
            </div>
          </div>

      </section>
    </main>
  );
}