import styles from "./BurgerCard.module.scss";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FC } from "react";
import { IBurger } from "../../models/models";

interface IProps {
  burger: IBurger;
  handleClick: (burger: IBurger) => void;
}

const BurgerCard: FC<IProps> = ({ burger, handleClick }) => {
  const { img, title, price, sale } = burger;

  const renderPrice = (): React.ReactElement => {
    if (sale) {
      return (
        <div className={styles["price-wrapper-1"]}>
          <div className={styles["inner-price"]}>
            <span className={styles.sale}>{sale}</span>
            <FaRegMoneyBillAlt />
          </div>
          <div className={styles["inner-price"]}>
            <span className={styles["sale-price"]}>{price}</span>
            <FaRegMoneyBillAlt />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles["price-wrapper-2"]}>
          <span className={styles.price}>{price}</span>
          <FaRegMoneyBillAlt />
        </div>
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={`img/${img}.jpg`} alt={title} />
      <span className={styles.title}>{title}</span>
      {renderPrice()}
      <button onClick={() => handleClick(burger)} className={styles.button}>
        Add to cart
      </button>
    </div>
  );
};

export default BurgerCard;
