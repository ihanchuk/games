export type TGameStore = {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
  description?: string;
};

export type TStoreComplete = {
  id: number;
  url: string;
  store: TGameStore;
};

export type TGamesStoreResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<TGameStore>;
};
