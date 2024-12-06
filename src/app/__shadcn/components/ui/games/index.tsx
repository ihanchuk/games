import { TGamesResponse } from "src/app/__types";
import { doApiRequest, doBackground } from "src/app/__actions";
import { Heading, Link } from "../custom";

export async function PopularGames() {
  const games = await doApiRequest<TGamesResponse>(`games/lists/main`, {
    page_size: 6,
    discover: true,
    page: 1,
    ordering: "-added",
  });

  return (
    <div>
      <Heading
        variant={"heading"}
        textSize={"xl3"}
        textColor={"silverDark"}
        margin={"large"}
      >
        Cool new Games:
      </Heading>
      <div className="flex flex-wrap gap-4 md:gap-8">
        {games.results.map((game) => {
          return (
            <div
              key={game.name}
              className="sm: w-full overflow-hidden md:w-2/5 md:rounded-md lg:w-1/5 lg:rounded-l"
            >
              <div className="h-32" style={doBackground(game.background_image)}></div>
              <div className="bg-slate-100 p-2">
                <Link href={`/games/${game.id}`}>{game.name} </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
