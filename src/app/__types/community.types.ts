import { TSingleGame } from "./games.types";

export type Reactions = {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "9": number;
  "10": number;
  "11": number;
  "12": number;
  "20": number;
  "21": number;
};

export type TDeveloper = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type TTag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

export type TRating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

export type TAddedByStatus = {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
};

type TPersonPosition = {
  id: string;
  name: string;
  slug: string;
};

export type TGameCreator = {
  id: string;
  name: string;
  slug: string;
  image: string;
  image_background: string;
  games_count: number;
  positions: Array<TPersonPosition>;
  games: Array<Partial<TSingleGame>>;
};

export type TCreatorsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<TGameCreator>;
};
