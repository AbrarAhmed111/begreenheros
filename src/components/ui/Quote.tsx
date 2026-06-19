import type { QuoteProps } from "../../types/models";

export function Quote({ children }: QuoteProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center text-blue sm:flex-row">
      <h2 className="text-xl font-semibold italic sm:text-2xl md:text-[40px]">"{children}"</h2>
      <small className="whitespace-nowrap">- Sae Chang</small>
    </div>
  );
}
