import Link from "next/link";
import Image from "next/image";

import EarthWhiteSvg from "@/assets/earth-white.svg";
import styles from "./BottomNav.module.css";


const LINKS = [
  { name: "Contact Us", href: "/contact-us" },
  { name: "About Us", href: "/about-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function BottomNav() {
  return (
    <footer className={styles.container}>
      <div className={styles.menu}>
        {LINKS.map((link) => (
          <Link 
            className={styles.link} 
            key={link.href}
          href={link.href}>{link.name}</Link>
        ))}
      </div>
      <div className={styles.logo} >
      <Image 
        width={30} 
        src={EarthWhiteSvg} 
        alt="earth" 
        />
        <div> NASA </div>
      </div>
    </footer>
  );
}
