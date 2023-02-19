import { Link } from "react-router-dom";
import styles from "./ShopLink.module.scss";

const ShopLink = () => {
  return (
    <Link to={"/dino/shop"} className={styles.wrapper}>
      Shop
    </Link>
  );
};

export default ShopLink;
