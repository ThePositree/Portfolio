import styles from "./CardRunner.module.scss";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import trackImg from "../../assets/track.png";
import { ICardRunner } from "../../models/models";
import { FC } from "react";

interface IProps {
  cardRunner: ICardRunner;
  clickBuy: (cardRunner: ICardRunner) => void;
}

const CardRunner: FC<IProps> = ({ cardRunner, clickBuy }) => {
  const { isActive, price, gif, width } = cardRunner;

  const returnButton = () => {
    if (isActive) {
      return (
        <button className={styles.button} onClick={() => clickBuy(cardRunner)}>
          <AiOutlineCheck />
        </button>
      );
    } else {
      return (
        <button className={styles.button} onClick={() => clickBuy(cardRunner)}>
          <span className={styles.price}>{price}</span>
          <FaRegMoneyBillAlt color='green' size={20} />
        </button>
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-img"]}>
        <img className={styles.runner} src={gif} alt='runner' width={width} />
        <img className={styles.track} src={trackImg} alt='track' />
      </div>
      {returnButton()}
    </div>
  );
};

export default CardRunner;
