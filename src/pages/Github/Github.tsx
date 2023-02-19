import styles from "./Github.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import { IUserState } from "../../models/models";
import { useUserGithub } from "../../hooks/useUserGithub";
import cn from "classnames";

const Github = () => {
  const { user, loading, search } = useUserGithub();

  const renderUser = (user: IUserState) => {
    if (!user) return "";
    if (user.notFound) return "Not Found";

    return (
      <div className={cn(styles.card, "appearance")}>
        <a href={user.link} target='_blank' rel='noreferrer' className={styles.username}>
          {user.login}
          <img className={styles.img} src={user.avatar} alt='' />
        </a>
        <span>Created at: {user.dateCreated}</span>
        <span>Updated at: {user.dateUpdated}</span>
        <span>Followers: {user.followers}</span>
        <div className={styles["repo-wrapper"]}>
          <span className={styles["repo-title"]}>Repositories:</span>
          {user.repo.map((item) => (
            <a className={styles["repo-link"]} key={item.link} href={item.link} target='_blank' rel='noreferrer'>
              <span>{item.name}</span>
              <div className={styles["star-wrapper"]}>
                <span>{item.stars}</span>
                <AiOutlineStar />
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={cn(styles.wrapper, "appearance")}>
        <input className={styles.input} type='search' onChange={search} />
        {loading ? "loading..." : renderUser(user)}
      </div>
    </>
  );
};

export default Github;
