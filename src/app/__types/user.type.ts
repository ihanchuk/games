export type TAuthenticatedUser = {
  name: string;
  email: string;
  image: string;
};

export type TProfileProps = {
  user: TAuthenticatedUser;
};
