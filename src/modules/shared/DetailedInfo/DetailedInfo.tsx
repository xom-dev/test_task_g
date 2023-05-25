import { DetailedInfoItem } from "../../../entities/User/interfaces";
import CoursesProgressIcon from "../../../icons/CursesProgres.svg";
import FoldersProgressIcon from "../../../icons/FoldersProgres.svg";
import BooksProgressIcon from "../../../icons/BooksProgres.svg";
import styles from "./DetailedInfo.module.scss";
interface Props {
  detailedInfoItem: DetailedInfoItem;
}
export const DetailedInfo = ({ detailedInfoItem }: Props) => {
  return (
    <div className={styles.wrapper}>
      {detailedInfoItem.level === 1 ? (
        <img
          src={CoursesProgressIcon}
          className={styles.icon}
          alt="CoursesProgressIcon"
        />
      ) : detailedInfoItem.level === 2 ? (
        <img
          src={FoldersProgressIcon}
          className={styles.icon}
          alt="FoldersProgressIcon"
        />
      ) : (
        <img
          src={BooksProgressIcon}
          className={styles.icon}
          alt="BooksProgressIcon"
        />
      )}
      <div className={styles.progressBlock}>
        <div className={styles.progress}>
          <span className={styles.progressDone}>{detailedInfoItem.done}</span>
          <span className={styles.progressDivider}>/</span>
          <span className={styles.progressAll}>{detailedInfoItem.all}</span>
        </div>
        <span className={styles.title}>{detailedInfoItem.title}</span>
      </div>
    </div>
  );
};
