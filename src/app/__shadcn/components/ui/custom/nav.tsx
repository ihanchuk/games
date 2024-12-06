import { auth } from "src/app/auth";
import { Link, LogIn } from "ui/custom";
import { Profile } from "ui/custom";
import { TAuthenticatedUser } from "src/app/__types";

export async function Nav() {
  const session = await auth();
  return (
    <div className="fixed w-full bg-slate-50 p-3">
      <div className="container mx-auto">
        <div className="flex w-full justify-between">
          <div className="block">
            <ul className="flex gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/stores">Store</Link>
              </li>
              <li>
                <Link href="/leaders">Leaderboard</Link>
              </li>
              <li>
                <Link href="/games">Games</Link>
              </li>
            </ul>
          </div>

          <div className="basis-10">
            {session?.user ? (
              <Profile user={session.user as TAuthenticatedUser} />
            ) : (
              <LogIn />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
