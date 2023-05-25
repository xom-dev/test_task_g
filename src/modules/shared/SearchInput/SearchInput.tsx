import Search from "../../../icons/Search.svg";
import styles from "./SearchInput.module.scss";

export const SearchInput = () => {
  return (
    <div className={styles.searchInput}>
      <img src={Search} className={styles.icon} alt="search" />
      <input type="text" className={styles.input} placeholder="Search" />
    </div>
  );
};
