import { TGameCreator } from "src/app/__types";
import { AppLink } from "ui/custom/link";

export function CreatorGames({ creator }: { creator: TGameCreator }) {
  return (
    <ul>
      {creator.games.slice(0, 3).map((game) => {
        return (
          <li key={`${creator.name}/${game.name}`}>
            <AppLink href={`/games/${game.id}`} variant={"inverted"}>
              {game.name}
            </AppLink>
          </li>
        );
      })}
    </ul>
  );
}
