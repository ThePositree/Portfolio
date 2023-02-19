import { useRef } from "react";
import styles from "./Dino.module.scss";
import dinoImg from "../../assets/dino.png";
import dinoGif from "../../assets/dino.gif";
import dogImg from "../../assets/dog.png";
import dogGif from "../../assets/dog.gif";
import tigerImg from "../../assets/tiger.png";
import tigerGif from "../../assets/tiger.gif";
import pikachyImg from "../../assets/pikachy.png";
import pikachyGif from "../../assets/pikachy.gif";
import cactusImg from "../../assets/cactus.png";
import trackImg from "../../assets/track.png";
import cn from "classnames";
import { MdReplay } from "react-icons/md";
import { useDinoPlay } from "../../hooks/useDinoPlay";
import { useAppSelector } from "../../hooks/reduxHooks";
import { IRunnersImg } from "../../models/models";

const Dino = () => {
  const currentRunnerId = useAppSelector((state) => state.shop.currentRunner);

  const runnersImg: IRunnersImg[] = [
    {
      png: dinoImg,
      gif: dinoGif,
    },
    {
      png: dogImg,
      gif: dogGif,
    },
    {
      png: tigerImg,
      gif: tigerGif,
    },
    {
      png: pikachyImg,
      gif: pikachyGif,
    },
  ];

  const currentRunner = runnersImg[currentRunnerId - 1];

  const runner = useRef<HTMLImageElement>(null);

  const cactus = useRef<HTMLImageElement>(null);

  const gameField = useRef<HTMLDivElement>(null);

  const { isGameStart, isGameOver, gameScore, bestGameScore, lastGameScore, playSpeed, replay } = useDinoPlay({ runner, cactus, styles, currentRunnerId, gameField });

  return (
    <div ref={gameField} className={styles.wrapper}>
      <div className={cn(styles.inner, { [styles["game-over"]]: isGameOver })}>
        <div className={styles["wrapper-game-over"]}>
          <div className={styles["game-over-text"]}>Game over</div>
          <div className={styles["game-over-score"]}>Your score: {gameScore}</div>
          <button className={styles.button} onClick={replay}>
            <MdReplay size={25} />
          </button>
        </div>
        <div className={styles.score}>Best score: {bestGameScore}</div>
        <div className={styles.score}>{gameScore}</div>
        <div className={styles.score}>Last score: {lastGameScore}</div>
        <img ref={runner} className={styles.runner} src={isGameStart ? currentRunner.gif : currentRunner.png} alt='runner' />
        <img className={cn(styles.track, { [styles["track-active"]]: isGameStart })} src={trackImg} alt='track' width={1000} />
        <img className={cn(styles.track2, { [styles["track-active-2"]]: isGameStart })} src={trackImg} alt='track' width={1000} />
        <img ref={cactus} className={cn(styles.cactus, { [styles[`cactus-play-${playSpeed}`]]: isGameStart })} src={cactusImg} alt='cactus' width={50} height={50} />
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default Dino;
