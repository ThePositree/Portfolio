import Dino from "../../Components/Dino/Dino";
import Header from "../../Components/Header/Header";
import ShopLink from "../../Components/ShopLink/ShopLink";
import BackBtn from "../../UI/BackBtn/BackBtn";
import styles from "./DinoPage.module.scss";
import cn from "classnames";

const DinoPage = () => {
  return (
    <div className={cn(styles.container, "appearance")}>
      <Header />
      <Dino />
      <ShopLink />
    </div>
  );
};

export default DinoPage;
