
import Link from "next/link";
import Image from "next/image";

import EarthSvg from "@/assets/earth.svg";
import SearchSvg from "@/assets/search.svg";
import ShareSvg from "@/assets/share.svg";
import MenuSvg from "@/assets/menu.svg";
import CloseSvg from "@/assets/close.svg";

import styles from "./TopNav.module.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TOPNAV_MENU_LINKS = [
  { name: "Missions", href: "/missions" },
  { name: "Galleries", href: "/galleries" },
  { name: "NASA Audiences", href: "/nasa-audiences" },
  { name: "Downloads", href: "/downloads" },
  { name: "NASA TV", href: "/nasa-tv" },
  { name: "About", href: "/about" },
];

const SECONDARYNAV_MENU_LINKS = [
  { name: "Human in Space", href: "/gallery/human-in-space" },
  { name: "Moon to Mars", href: "/gallery/moon-to-mars" },
  { name: "Earth", href: "/gallery/earth" },
  { name: "Space Tech", href: "/gallery/space-tech" },
  { name: "Solar System & Beyond", href: "/gallery/solar-system-and-beyond" },
  { name: "STEM Engagement", href: "/gallery/stem-engagement" },
  { name: "History", href: "/gallery/history" },
  { name: "Benefits to You", href: "/gallery/benefits-to-you" },
];

export default function TopNav() {
  return (
    <div className={styles.container}>
      <section className={styles.logo}>
        <Image src={EarthSvg} alt="earth" />
        <span> NASA </span>
      </section>

      <section className={styles.menu}>
        <div className={styles.linksContainer}>
          {TOPNAV_MENU_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>{link.name}</Link>
          ))}
        </div>
      </section>

      <div className={styles.divider}></div>

      <nav className={styles.secondaryNav}>
        <Image src={SearchSvg} alt="search" />
        <Image src={ShareSvg} alt="share" />

        <Popup
          trigger={(open) => (
            <Image src={open ? CloseSvg : MenuSvg} alt="menu" />
          )}
          arrow={false}
          position="bottom right"
        >
          <div className={styles.secondaryMenuLinkContainer}>
            {SECONDARYNAV_MENU_LINKS.map((link) => (
              <Link
                className={styles.secondaryMenuLink}
                key={link.href}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </Popup>
      </nav>
    </div>
  );
}