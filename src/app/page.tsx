import { Suspense } from "react";
import { Fallback } from "ui/custom/fallback";
import { DiamondsBlock, GamesBlock } from "./__blocks";
import { auth } from "./auth";

export const revalidate = 3600;

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <Suspense fallback={<Fallback message="Popular Games" amount={3} />}>
        <GamesBlock amount={3} ordering={"-added"} message="Popular Games" />
      </Suspense>

      {session && session.user && (
        <div>
          <DiamondsBlock />
        </div>
      )}

      <Suspense fallback={<Fallback message="Recently Added to Store" amount={3} />}>
        <GamesBlock amount={3} ordering={"-created"} message="Recently Added to Store" />
      </Suspense>
    </main>
  );
}
