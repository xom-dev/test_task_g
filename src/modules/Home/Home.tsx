import { useSelector } from "react-redux";
import { userSelector } from "../common/Layout/services/selector";
import LevelProgressIcon from "../../icons/LevelProgres.svg";
import SpaceIcon from "../../icons/Space.svg";

import styles from "./Home.module.scss";
import DetailedInfo from "../shared/DetailedInfo";
import {
  AdditionalItem,
  DetailedInfoItem,
} from "../../entities/User/interfaces";
import { Addition } from "../shared/Addition/Addition";

export const Home = () => {
  const { progressBoard, detailedInfo, additions } = useSelector(userSelector);
  console.log("detailedInfo", detailedInfo);

  return (
    <div className={styles.wrapper}>
      <section className={styles.progressSection}>
        <div className={styles.progressBoard}>
          <span className={styles.title}>Hey {progressBoard.name}!</span>
          <span className={styles.subTitle}>
            Here’s complex overview of your progress
          </span>
          <img src={LevelProgressIcon} alt="levelProgressIcon" />
          <span className={styles.percentage}>
            {progressBoard.percentage}% to reach next level
          </span>
        </div>

        <div className={styles.info}>
          <img src={SpaceIcon} className={styles.space} alt="spaceIcon" />
          <div className={styles.detailedInfo}>
            {detailedInfo?.map((item: DetailedInfoItem) => (
              <DetailedInfo key={item.level} detailedInfoItem={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.addition}>
        {additions?.map((addition: AdditionalItem) => (
          <Addition key={addition.title} additionalItem={addition} />
        ))}
      </section>
    </div>
  );
};
