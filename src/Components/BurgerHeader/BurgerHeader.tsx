import styles from "./BurgerHeader.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FC, useRef, useState } from "react";
import cn from "classnames";
import Cart from "../Cart/Cart";
import { IBurger } from "../../models/models";

interface IProps {
  setBurgers: React.Dispatch<React.SetStateAction<IBurger[]>>;
  setBurgersDefault: () => void;
  cartItems: IBurger[];
  setCartItems: React.Dispatch<React.SetStateAction<IBurger[]>>;
}

const BurgerHeader: FC<IProps> = ({ setBurgers, setBurgersDefault, cartItems, setCartItems }) => {
  const cartButton = useRef<HTMLButtonElement>(null);

  const [isActiveButtons, setIsActiveButtons] = useState({
    isActiveFirstButton: false,
    isActiveSecondButton: false,
  });

  const [isActiveCart, setIsActiveCart] = useState(false);

  const burgerSortRating: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setBurgersDefault();
    setIsActiveButtons({
      isActiveFirstButton: true,
      isActiveSecondButton: false,
    });
    if (isActiveButtons.isActiveFirstButton) {
      setIsActiveButtons({
        isActiveFirstButton: false,
        isActiveSecondButton: false,
      });
      e.currentTarget.blur();
      return;
    }
    setIsActiveButtons((prev) => {
      return { ...prev, isActiveFirstButton: true };
    });
    setBurgers((prev) => {
      const burgersArray = [...prev].sort((burger1, burger2) => {
        return burger2.rating - burger1.rating;
      });

      burgersArray.length = 3;

      return burgersArray;
    });
  };

  const burgerSortSale: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setBurgersDefault();
    setIsActiveButtons({
      isActiveFirstButton: false,
      isActiveSecondButton: true,
    });
    if (isActiveButtons.isActiveSecondButton) {
      setIsActiveButtons({
        isActiveFirstButton: false,
        isActiveSecondButton: false,
      });
      e.currentTarget.blur();
      return;
    }
    setIsActiveButtons((prev) => {
      return { ...prev, isActiveSecondButton: true };
    });
    setBurgers((prev) => {
      const burgersArray = [...prev].filter((item) => item.sale !== 0);

      return burgersArray;
    });
  };

  const amountItems = () => {
    let counter = 0;

    cartItems.forEach((element) => {
      counter = element.amount! + counter;
    });

    return counter ? counter : "";
  };

  const closeCart = () => {
    setIsActiveCart(false);
    cartButton.current!.blur();
  };

  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <button onClick={burgerSortRating} className={cn(styles.button, { [styles.active]: isActiveButtons.isActiveFirstButton })}>
          Top 3
        </button>
        <button onClick={burgerSortSale} className={cn(styles.button, { [styles.active]: isActiveButtons.isActiveSecondButton })}>
          Sale
        </button>
      </div>
      <button ref={cartButton} onClick={() => setIsActiveCart(true)} className={cn(styles.button, styles.cart)}>
        <AiOutlineShoppingCart size={35} className={styles.icon} />
        {amountItems()}
      </button>
      {isActiveCart && <Cart close={closeCart} cartItems={cartItems} setCartItems={setCartItems} />}
    </header>
  );
};

export default BurgerHeader;
