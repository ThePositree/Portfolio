import styles from "./Cart.module.scss";
import { FC, useEffect } from "react";
import { IBurger } from "../../models/models";

interface IProps {
  close: () => void;
  cartItems: IBurger[];
  setCartItems: React.Dispatch<React.SetStateAction<IBurger[]>>;
}

type method = "plus" | "minus";

const Cart: FC<IProps> = ({ close, cartItems, setCartItems }) => {
  useEffect(() => {
    document.body.classList.add("modal");
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", closeModal);
    return () => {
      document.body.classList.remove("modal");
      document.removeEventListener("keydown", closeModal);
    };
  });

  const amountItems = () => {
    let counter = 0;

    cartItems.forEach((element) => {
      counter = element.amount! + counter;
    });

    return counter;
  };

  const amountMoney = (arrayItems: IBurger[]) => {
    let total = 0;
    arrayItems.forEach((element) => {
      let counter = 0;
      if (element.sale) {
        counter += element.sale;
      } else {
        counter += element.price;
      }
      if (element.amount! > 1) {
        counter = counter * element.amount!;
      }
      total += counter;
    });
    return total;
  };

  const changeAmount = (burger: IBurger, method: method) => {
    let newArray = [...cartItems];

    const currentBurger = newArray.find((item) => item.id === burger.id);
    if (currentBurger) {
      if (method === "plus") ++currentBurger.amount!;
      if (method === "minus") --currentBurger.amount!;

      if (currentBurger.amount! < 1) {
        newArray = newArray.filter((item) => item !== currentBurger);
      }
    }
    setCartItems(newArray);
  };

  const renderCartItems = (item: IBurger, index: number): React.ReactElement => {
    return (
      <div key={item.title} className={styles.card}>
        <div>{index + 1}.</div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.price}>{amountMoney([item])}</div>
        <div className={styles.amount}>
          <button onClick={() => changeAmount(item, "plus")} className={styles.plus}>
            +
          </button>
          <div className={styles["text-amount"]}>{item.amount}</div>
          <button onClick={() => changeAmount(item, "minus")} className={styles.minus}>
            -
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper} onClick={() => close()}>
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <span>Cart</span>
          <span>Amount items: {amountItems()}</span>
          <button onClick={() => close()} className={styles.close}>
            X
          </button>
        </div>
        <div className={styles.content}>{cartItems.map(renderCartItems)}</div>
        <div className={styles.bottom}>
          <div>Total: {amountMoney(cartItems)}</div>
          <button className={styles.buy}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
