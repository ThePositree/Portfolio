import { AiFillGithub } from "react-icons/ai";
import BackBtn from "../../UI/BackBtn/BackBtn";
import styles from "./Footer.module.scss";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className='appearance'>
      <a className={styles.github} href='https://github.com/ThePositree' target='_blank' rel='noreferrer'>
        <AiFillGithub />
      </a>
      <BackBtn active={pathname === "/" ? false : true} />
    </footer>
  );
};

export default Footer;
