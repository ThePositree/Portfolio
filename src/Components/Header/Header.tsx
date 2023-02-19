import styles from "./Header.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Header = () => {
  const money = useAppSelector((state) => state.shop.money);

  return (
    <header className={styles.header}>
      <div className={styles.money}>
        <FaRegMoneyBillAlt size={50} color={"green"} />
        <span className={styles["money-text"]}>{money}</span>
      </div>
    </header>
  );
};

export default Header;
