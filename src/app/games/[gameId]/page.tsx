import Image from "next/image";
import { Platform } from "ui/platform";
import { TSingleGameCompleteDescription } from "src/app/__types";
import { doApiRequest, stripHTMLTags } from "src/app/__actions";
import { Heading, P, Rating } from "ui/custom";
import { PopularGames } from "ui/games";

export default async function Game({ params }: { params: { gameId: string } }) {
  const game = await doApiRequest<TSingleGameCompleteDescription>(
    `games/${params.gameId}`,
  );
  return (
    <div>
      <div className="lg:flex lg:flex-wrap lg:gap-4">
        <div className="overflow-auto rounded-lg lg:w-1/2">
          <div>
            <Image
              src={game.background_image}
              width={900}
              height={600}
              alt={game.name_original}
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <div>
              <Heading textSize={"lg"} textColor={"slateLight"}>
                Released:
              </Heading>
              <P variant={"xs"}>{new Date(game.released).toDateString()}</P>
            </div>
            <div>
              <Heading textSize={"lg"} textColor={"slateLight"}>
                <Heading textSize={"lg"} textColor={"slateLight"}>
                  Gamers scored this game:
                </Heading>
                <Rating rate={game.rating} total={5} />
              </Heading>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5">
          <div>
            <Heading variant={"heading"} textSize={"xl3"} textColor={"silverDark"}>
              {game.name}
            </Heading>
            <Heading textSize={"lg"} textColor={"slateLight"}>
              Description:
            </Heading>
            <P variant={"sm"} textColor={"dark"}>
              {stripHTMLTags(game.description)}
            </P>
            <div className="w-full">
              <Heading textSize={"lg"} textColor={"slateLight"}>
                Available Platforms:
                <ul className="flex flex-wrap gap-1">
                  {game.platforms.map((platform) => (
                    <Platform
                      width={200}
                      height={60}
                      platform={platform}
                      withImg={false}
                      key={platform.platform.name}
                    />
                  ))}
                </ul>
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PopularGames />
      </div>
    </div>
  );
}
