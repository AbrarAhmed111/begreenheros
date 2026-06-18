import type { QuoteProps } from "../../types/models";

export function Quote({ children }: QuoteProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center text-blue sm:flex-row">
      <h2 className="text-[clamp(1.2rem,5vw,2rem)] italic">“{children}”</h2>
      <small className="whitespace-nowrap">- Sae Chang</small>
    </div>
  );
}

