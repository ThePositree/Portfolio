export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
  description: string;
}

export interface IBurger {
  id: number;
  title: string;
  price: number;
  img: string;
  sale: number;
  rating: number;
  amount?: number;
}

export interface ICardRunner {
  id: number;
  img: string;
  gif: string;
  price: number;
  width: number;
  isPurchased: boolean;
  isActive: boolean;
}

export interface IRunnersImg {
  png: string;
  gif: string;
}

export interface IUseDinoPlayParam {
  runner: React.RefObject<HTMLImageElement>;
  cactus: React.RefObject<HTMLImageElement>;
  gameField: React.RefObject<HTMLDivElement>;
  currentRunnerId: number;
  styles: any;
}

export interface IUseDinoPlayReturnValue {
  isGameStart: boolean;
  isGameOver: boolean;
  gameScore: number;
  bestGameScore: number;
  lastGameScore: number;
  playSpeed: number;
  replay: () => void;
}

export interface cell {
  index: number;
  row: number;
  col: number;
  isBomb: boolean;
  isOpen: boolean;
  numBombNearby: number;
}

export type gameState = 0 | 1 | -1;

export type playingField = [cell[], cellOpen, gameState];

export type cellOpen = (cell: cell) => playingField;

export interface IListSelect {
  id: number;
  text: string;
  style: any;
}

export interface IResponseRepos {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: IResponseUser;
  html_url: string;
  description?: any;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface IResponseUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: any;
  company?: any;
  blog: string;
  location?: any;
  email?: any;
  hireable?: any;
  bio?: any;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  login: string;
  avatar: string;
  dateCreated: string;
  dateUpdated: string;
  followers: number;
  link: string;
  repo: IRepo[];
  notFound: boolean;
}

export interface IRepo {
  link: string;
  name: string;
  stars: number;
}

export type IUserState = IUser | { notFound: true } | undefined;
