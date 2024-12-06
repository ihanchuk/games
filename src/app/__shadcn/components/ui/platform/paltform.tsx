import Image from "next/image";
import { TPlatformFull } from "src/app/__types/platform.types";
import { P } from "../custom";

export function Platform({
  platform,
  width,
  height,
  withImg,
}: {
  platform: TPlatformFull;
  width: number;
  height: number;
  withImg: boolean;
}) {
  return (
    <li key={platform.platform.name}>
      <P variant={"sm"} textColor={"dark"}>
        {platform.platform.name}
      </P>
      {withImg && (
        <Image
          src={platform.platform.image_background}
          width={width}
          height={height}
          alt={platform.platform.name}
        />
      )}
    </li>
  );
}
