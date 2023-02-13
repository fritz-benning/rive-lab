"use client";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Nav() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/party" className={styles.link} activeStyle={{ color: "#000" }}>
            Party
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/tree" className={styles.link} activeStyle={{ color: "#000" }}>
            Tree
          </Link>
        </li>
      </ul>
    </nav>
  );
}
