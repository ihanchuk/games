import Image from "next/image";

import { TCreatorsResponse } from "../__types";
import { doApiRequest } from "../__actions";

import { Heading, P } from "ui/custom";
import { CreatorGames } from "ui/creators";

export default async function Leaders() {
  const creators = await doApiRequest<TCreatorsResponse>("creators", {
    page: 1,
    page_size: 10,
  });

  return (
    <div>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
        {creators.results.map((creator) => {
          return (
            <div key={creator.name} className="flex gap-1 rounded-md bg-slate-700">
              <div className="h-48 overflow-hidden">
                <Image
                  src={creator.image}
                  width={200}
                  height={200}
                  alt={creator.name}
                  className="rounded-md"
                />
              </div>
              <div>
                <Heading textSize={"xl2"} textColor={"silverDark"}>
                  {creator.name}
                </Heading>
                <P textColor={"light"}>Participated:</P>
                <CreatorGames creator={creator} />
              </div>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}
