export function ProfileBlock({ val, legend }: { val: string | number; legend: string }) {
  return (
    <div className="my-2 border-t-[1px] border-gray-200 pt-3">
      <div className="text-sm">{legend}</div>
      <p className="text-muted-foreground text-xs">{val}</p>
    </div>
  );
}
