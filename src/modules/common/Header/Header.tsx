import SearchInput from "../../shared/SearchInput";
import NotificationIcon from "../../../icons/IconNotification.svg";
import styles from "./Header.module.scss";
import User from "../../shared/User";
import { UserInfo } from "../../../entities/User/interfaces";

interface Props {
  userInfo: UserInfo;
}

export const Header = ({ userInfo }: Props) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.search}>
        <SearchInput />
      </section>
      <section className={styles.settings}>
        <img
          src={NotificationIcon}
          alt="notification"
          className={styles.notificationIcon}
        />
        <User
          name={userInfo?.name}
          role={userInfo?.role}
          cardImg={userInfo?.photo}
          isActive={userInfo?.isActive}
        />
      </section>
    </div>
  );
};
