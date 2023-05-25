import styles from "./User.module.scss";

interface Props {
  name: string;
  role: string;
  cardImg: string;
  isActive: boolean;
}

export const User = ({ name, role, cardImg, isActive }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </div>
      <img alt="cardImg" />
    </div>
  );
};
