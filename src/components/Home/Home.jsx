import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/icon-pinterest.svg";

function Home() {
  const [timeRem, setTimeRem] = useState(709200);

  const interval = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRem((timeRem) => timeRem - 1);
    }, 1000);

    interval.current = intervalId;
  }, []);
  useEffect(() => {
    if (timeRem === 0) {
      console.log("expired");
      const intervalId = interval.current;
      clearInterval(intervalId);
    }
  }, [timeRem]);

  function calTimeRemainig(timeRem) {
    const seconds = Math.floor(timeRem % 60);
    const minutes = Math.floor(timeRem / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return [
      [days, "days"],
      [hours % 24, "hours"],
      [minutes % 60, "min"],
      [seconds, "sec"],
    ];
  }

  return (
    <div className={styles.container}>
      <div className={styles.countdown}>
        <h3 className={styles.header}>We're launching Soon</h3>
        <div className={styles.time_blocks}>
          {calTimeRemainig(timeRem).map((item) => {
            return (
              <div key={item[1]} className={styles.time_block}>
                <div className={styles.time_repr}>{item[0]}</div>
                <p className={styles.time_type}>{item[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.pattern_hills}>
        <div className={styles.socials}>
          <Facebook />
          <Pinterest />
          <Instagram />
        </div>
      </div>
    </div>
  );
}

export default Home;
