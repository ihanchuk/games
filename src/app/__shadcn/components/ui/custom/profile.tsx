"use client";

import { TProfileProps } from "src/app/__types";
import { Avatar, AvatarImage, AvatarFallback } from "ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "ui/popover";
import { Button } from "ui/button";
import { doLogout } from "src/app/__actions";
import { LogOut } from "lucide-react";
import { useDiamondsStore } from "src/app/__stores";
import { ProfileBlock } from "src/app/__blocks";

export function Profile({ user }: TProfileProps) {
  const userDiamonds = useDiamondsStore((state) => state.diamonds);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div>
            <ProfileBlock legend="Name:" val={user.name} />
            <ProfileBlock legend="Email:" val={user.email} />
            <ProfileBlock legend="Diamonds:" val={userDiamonds} />
            <div className="my-2 border-t-[1px] border-gray-200 pt-3">
              <form action={doLogout}>
                <Button variant={"ghost"} type="submit" className="bg-sky-100">
                  <LogOut />
                  Signout
                </Button>
              </form>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
