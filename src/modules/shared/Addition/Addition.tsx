import styles from "./Addition.module.scss";
import { AdditionalItem } from "../../../entities/User/interfaces";
import AddIcon from "../../../icons/AddIcon.svg";
import DetailsIcon from "../../../icons/Details.svg";
import PersonIcon from "../../../icons/PersonIcon.svg";
import BookIcon from "../../../icons/Category.svg";
import Background1 from "../../../icons/Background1.svg";
import Background2 from "../../../icons/Background2.svg";
import Background3 from "../../../icons/Background3.svg";

interface Props {
  additionalItem: AdditionalItem;
}
export const Addition = ({ additionalItem }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.addButton}>
          <img src={AddIcon} alt="AddIcon" />
        </button>
        <img src={DetailsIcon} alt="DetailsIcon" />
      </div>

      <div className={styles.additionalInfo}>
        <div className={styles.info}>
          <img src={BookIcon} alt="BookIcon" />
          <span>{additionalItem.books}</span>
        </div>
        <div className={styles.info}>
          <img src={PersonIcon} alt="PersonIcon" />
          <span>{additionalItem.users}</span>
        </div>
      </div>

      <div className={styles.backgrounds}>
        <img
          src={Background1}
          className={styles.backgroundIcon}
          alt="Background1"
        />
        <img
          src={Background2}
          className={styles.backgroundIcon}
          alt="Background2"
        />
        <img
          src={Background3}
          className={styles.backgroundIcon}
          alt="Background3"
        />
      </div>
    </div>
  );
};
