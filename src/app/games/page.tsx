import { doApiRequest, doBackground } from "src/app/__actions";
import { TGamesResponse } from "src/app/__types";
import { Link, Rating } from "ui/custom/";

export default async function GamesPage() {
  const gamesData = await doApiRequest<TGamesResponse>("games", {
    page: 1,
    page_size: 10,
  });

  return (
    <>
      <h1>Games</h1>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {gamesData.results.map((game) => {
          return (
            <div key={game.name} className="overflow-hidden md:rounded-md lg:rounded-l">
              <div className="h-64" style={doBackground(game.background_image)}></div>
              <div className="bg-slate-100 p-2">
                <ul className="flex items-center justify-between">
                  <li>
                    <Link href={`/games/${game.id}`}>{game.name} </Link>
                  </li>
                  <li>
                    <Rating rate={game.rating} total={5} />
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
