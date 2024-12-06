import { Heading } from "ui/custom";

export function Fallback({ message, amount }: { message: string; amount: number }) {
  return (
    <div>
      <Heading variant={"heading"} textSize={"xl3"} textColor={"silverDark"}>
        {message}
      </Heading>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: amount }).map((_, index) => {
          return (
            <div
              key={`fake-${index}`}
              className="animate-pulse md:rounded-md lg:rounded-l"
            >
              <div className="h-40 bg-slate-600" />
              <div className="bg-slate-200 p-2">&nbsp;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
