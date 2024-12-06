"use client";
import Image from "next/image";
import { Dialog, Heading } from "ui/custom";
import { useDiamondsStore } from "../__stores";
import { ShoppingBagIcon } from "lucide-react";
import { toast } from "sonner";

export function DiamondsBlock() {
  const incDiamonds = useDiamondsStore((state) => state.increase);

  const diamondsUrls = [
    "https://images.squarespace-cdn.com/content/v1/59fb3f1b1f318d074f65a2c3/63524ebc-15a1-4560-811f-572f7d8a055a/fancy+coloured+diamonds.jpg",
    "https://www.newworlddiamonds.com/cdn/shop/articles/how-rare-is-a-purple-diamond-new-world-diamonds_1200x600_crop_center.jpg?v=1726753668",
    "https://londonde.com/cdn/shop/articles/DALL_E_2023-11-23_15.31.05_-_Photorealistic_image_of_lab-grown_diamonds._The_image_should_showcase_several_clear_sparkling_lab-grown_diamonds_of_different_sizes_meticulously_arr.png?v=1700905649",
  ];

  const onOkToBuy = (amount: number) => {
    incDiamonds(amount);
    toast.success("Diamonds acquired successfully!");
  };

  return (
    <div>
      <Heading
        variant={"heading"}
        textSize={"xl3"}
        textColor={"silverDark"}
        margin={"large"}
      >
        Best deals! Only 4 You!
      </Heading>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => {
          const amount = 200 * (index + 1);
          return (
            <div key={`gem-${index}`}>
              <div className="h-48 overflow-hidden md:rounded-md lg:rounded-l">
                <Image src={diamondsUrls[index]} width={600} height={200} alt="gems" />
              </div>
              <div className="bg-slate-200 p-2">
                <Dialog
                  message="Do you want to buy Diamonds? Diamonds is internal Portal currency!"
                  onOk={() => onOkToBuy(amount)}
                >
                  <div className="flex">
                    <ShoppingBagIcon size={18} />
                    Buy {amount} for free!
                  </div>
                </Dialog>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
