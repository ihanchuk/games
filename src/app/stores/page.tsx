import { doApiRequest, doBackground } from "src/app/__actions";
import { TGamesStoreResponse } from "src/app/__types";
import { Heart } from "lucide-react";
import Link from "next/link";

export default async function StorePage() {
  const storesData = await doApiRequest<TGamesStoreResponse>("stores");

  return (
    <>
      <h1>Stores</h1>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {storesData.results.map((store) => {
          return (
            <div key={store.name} className="overflow-hidden md:rounded-md lg:rounded-l">
              {/* 
                 Feels like Tailwind is not able to work with dynamic background images that are not predefined! 
                 I will have to stick with good old ugly inline styles
              */}
              <Link href={`/stores/${store.id}`}>
                <div className="h-64" style={doBackground(store.image_background)}></div>
              </Link>
              <div className="bg-slate-100 p-2">
                <ul className="flex items-center justify-between">
                  <li>{store.name}</li>
                  <li>Games: {store.games_count}</li>
                  <li>
                    <Heart />
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
