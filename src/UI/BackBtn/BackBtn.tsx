import styles from "./BackBtn.module.scss";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FC } from "react";

interface IProps {
  active?: boolean;
}

const BackBtn: FC<IProps> = ({ active = true }) => {
  const navigate = useNavigate();
  return (
    <>
      {active && (
        <button className={styles.back} onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack size={40} className={styles.icon} color='white' />
        </button>
      )}
    </>
  );
};

export default BackBtn;
