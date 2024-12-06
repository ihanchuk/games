"use server";

import { TGamesResponse } from "../__types";
import { doApiRequest, doBackground } from "../__actions";
import { Link, Rating, Heading } from "ui/custom";

export async function GamesBlock({
  amount,
  ordering,
  message,
}: {
  amount: number;
  ordering: "-relevance" | "-created" | "-added" | "-released";
  message: string;
}) {
  const gamesData = await doApiRequest<TGamesResponse>("games", {
    page: 1,
    page_size: amount,
    discover: true,
    ordering,
  });

  return (
    <div>
      <Heading
        variant={"heading"}
        textSize={"xl3"}
        textColor={"silverDark"}
        margin={"large"}
      >
        {message}
      </Heading>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {gamesData.results.map((game) => {
          return (
            <div key={game.name} className="overflow-hidden md:rounded-md lg:rounded-l">
              <Link href={`/games/${game.id}`}>
                <div
                  className="h-40 opacity-20 transition duration-500 hover:opacity-100"
                  style={doBackground(game.background_image)}
                />
              </Link>
              <div className="bg-slate-200 p-2">
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
    </div>
  );
}
