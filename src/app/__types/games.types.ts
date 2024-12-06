import { TDeveloper, Reactions, TTag, TRating, TAddedByStatus } from "./community.types";
import { TStoreComplete } from "./store.types";
import { TPlatformFull, TParentPlatform } from "./platform.types";

export type TGamePlatform = {
  id: number;
  name: string;
  slug: string;
  image: null | string;
  year_end: string;
  year_start: string;
  games_count: number;
  image_background: string;
};

export type TSingleGame = {
  id: 0;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Array<TRating>;
  ratings_count: number;
  reviews_text_count: string;
  added: number | string;
  added_by_status: TAddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  paltforms: Array<TGamePlatform>;
};

export type TGamesResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<TSingleGame>;
};

export type TGameGenre = {
  id: string;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type TSingleGameCompleteDescription = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Array<TRating>;
  reactions: Reactions;
  added: number;
  added_by_status: TAddedByStatus;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: Array<TGamesResponse>;
  metaCritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: Array<TParentPlatform>;
  platforms: Array<TPlatformFull>;
  stores: Array<TStoreComplete>;
  developers: Array<TDeveloper>;
  genres: Array<TGameGenre>;
  tags: Array<TTag>;
  publishers: Array<TDeveloper>;
  clip?: string;
  description_raw: string;
};
