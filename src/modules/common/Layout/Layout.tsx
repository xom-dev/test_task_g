import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./services/selector";
import Menu from "../Menu";
import Header from "../Header";

import styles from "./Layout.module.scss";
import { getUserRequest } from "./services/actions";

interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(userSelector);
  console.log("userInfo", userInfo);

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  return (
    <div className={styles.wrapper}>
      <Menu />
      <section className={styles.contentBlock}>
        <Header userInfo={userInfo} />
        {children}
      </section>
    </div>
  );
};
