import Image from "next/image";

import { TGameStore } from "src/app/__types/store.types";
import { doApiRequest, stripHTMLTags } from "src/app/__actions";
import { Heading, P } from "ui/custom";

export default async function Store({ params }: { params: { storeId: string } }) {
  const storesDescription = await doApiRequest<TGameStore>(`stores/${params.storeId}`);
  return (
    <div className="lg:flex lg:gap-2">
      <div>
        <Image
          src={storesDescription.image_background}
          width={800}
          height={800}
          alt={storesDescription.name}
        />
      </div>

      <div className="lg:w-1/2">
        <Heading textColor={"light"}>{storesDescription.name}</Heading>
        <P variant={"sm"} textColor={"dark"}>
          {stripHTMLTags(storesDescription.description!)}
        </P>
      </div>
    </div>
  );
}
