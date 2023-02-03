"use client";
import Rive from "@rive-app/react-canvas";
import styles from "./page.module.css";

export default function RivLab() {
  return (
    <main className={styles.main}>
      <div className={styles.animation}>
        <Rive src="animations/party.riv" />
      </div>
    </main>
  );
}
