import { useState } from "react";
import { IBurger } from "../../models/models";
import BurgerCard from "../../Components/BurgerCard/BurgerCard";
import BurgerHeader from "../../Components/BurgerHeader/BurgerHeader";
import styles from "./Burger.module.scss";
import BackBtn from "../../UI/BackBtn/BackBtn";
const Burger = () => {
  const burgersArray: IBurger[] = [
    {
      id: 1,
      title: "The Anakin Frywalker Black Bun Burger",
      price: 100,
      img: "burger1",
      sale: 50,
      rating: 2,
    },
    {
      id: 2,
      title: "Top Bun Burger",
      price: 150,
      img: "burger2",
      sale: 0,
      rating: 5,
    },
    {
      id: 3,
      title: "The Chickenatarian Burger",
      price: 320,
      img: "burger3",
      sale: 0,
      rating: 2,
    },
    {
      id: 4,
      title: "You Remind me of the Bacon Burger",
      price: 150,
      img: "burger4",
      sale: 0,
      rating: 6,
    },
    {
      id: 5,
      title: "Sub-Conscious Burger",
      price: 175,
      img: "burger5",
      sale: 0,
      rating: 10,
    },
    {
      id: 6,
      title: "One Flew Over the Clucker's Nest Chicken Burger",
      price: 100,
      img: "burger6",
      sale: 0,
      rating: 4,
    },
    {
      id: 7,
      title: "Bohemian Radishy Burger",
      price: 120,
      img: "burger7",
      sale: 100,
      rating: 3,
    },
    {
      id: 8,
      title: "Curd-fect Strangers Burger",
      price: 500,
      img: "burger8",
      sale: 200,
      rating: 1,
    },
    {
      id: 9,
      title: "Porks of Glory Bacon Burger",
      price: 230,
      img: "burger9",
      sale: 0,
      rating: 9,
    },
  ];

  const [burgers, setBurgers] = useState<IBurger[]>(burgersArray);
  const [cartItems, setCartItems] = useState<IBurger[]>([]);

  const setBurgersDefault = () => {
    setBurgers(burgersArray);
  };

  const addToCart = (burger: IBurger) => {
    const newArray = [...cartItems];
    const currentBurger = newArray.find((item) => item.id === burger.id);
    if (currentBurger) {
      ++currentBurger.amount!;
    } else {
      const indexNewItem = newArray.push(burger);
      newArray[indexNewItem - 1].amount = 1;
    }
    setCartItems(newArray);
  };

  return (
    <div className={(styles.wrapper, "appearance")}>
      <BurgerHeader setBurgers={setBurgers} setBurgersDefault={setBurgersDefault} cartItems={cartItems} setCartItems={setCartItems} />
      <div className={styles.inner}>
        {burgers.map((burger) => (
          <BurgerCard burger={burger} key={burger.id} handleClick={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Burger;
