export type TRequirements = {
  minimum?: string;
  recommended?: string;
};

export type TPlatformFull = {
  platform: TGamePlatformComplete;
  released_at: string;
  requirements: TRequirements;
};

interface TGamePlatformComplete {
  id: number;
  name: string;
  slug: string;
  image?: any;
  year_end?: any;
  year_start?: any;
  games_count: number;
  image_background: string;
}

export type TParentPlatform = {
  platform: TGamePlatformShort;
};

type TGamePlatformShort = {
  id: number;
  name: string;
  slug: string;
};
