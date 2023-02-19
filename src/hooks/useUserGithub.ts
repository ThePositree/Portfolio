import { IResponseRepos, IResponseUser, IUserState, IRepo } from "../models/models";
import { useState } from "react";
import Axios from "axios";

export const useUserGithub = () => {
  let timeout: NodeJS.Timeout | undefined;
  const [user, setUser] = useState<IUserState>();
  const [loading, setIsLoading] = useState<boolean>(false);
  const search: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (!e.target.value) {
      setIsLoading(false);
      setUser(undefined);
      return;
    }
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      setIsLoading(true);
      try {
        const responseUser = await Axios.get<IResponseUser>(`https://api.github.com/users/${e.target.value}`);
        const dataUser = responseUser.data;

        const login = dataUser.login;
        const avatar = dataUser.avatar_url;
        const dateCreated = dataUser.created_at.replace("T", " ").replace("Z", "");
        const dateUpdated = dataUser.updated_at.replace("T", " ").replace("Z", "");
        const followers = dataUser.followers;
        const link = dataUser.html_url;
        const { data: dataRepo } = await Axios.get<IResponseRepos[]>(dataUser.repos_url);
        const repo = dataRepo.map((item): IRepo => {
          return {
            link: item.html_url,
            name: item.name,
            stars: item.stargazers_count,
          };
        });
        setUser({
          login,
          avatar,
          dateCreated,
          dateUpdated,
          followers,
          link,
          repo,
          notFound: false,
        });
      } catch (error) {
        setUser({
          notFound: true,
        });
      }
      setIsLoading(false);
    }, 500);
  };

  return { user, loading, search };
};
