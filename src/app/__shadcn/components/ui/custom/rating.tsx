import { Star } from "lucide-react";

export function Rating({ rate, total }: { rate: number; total: number }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex" }}>
        {Array.from({ length: total }, (_, index) => (
          <Star fill="#111" strokeWidth={0} size={18} key={`hollow-star-${index}`} />
        ))}
      </div>
      <div style={{ position: "absolute", display: "flex", top: "0" }}>
        {Array.from({ length: rate }, (_, index) => (
          <Star fill="#ebc634" strokeWidth={0} size={18} key={`filled-star-${index}`} />
        ))}
      </div>
    </div>
  );
}
