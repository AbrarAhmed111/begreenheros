import { useEffect, useState, type ReactNode } from "react";

const MODAL_EXIT_MS = 400;

export { MODAL_EXIT_MS };

export interface ModalProps {
  open: boolean;
  labelledBy?: string;
  describedBy?: string;
  panelClassName?: string;
  children: ReactNode;
}

export function Modal({
  open,
  labelledBy,
  describedBy,
  panelClassName = "",
  children,
}: ModalProps) {
  const [mounted, setMounted] = useState(open);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setClosing(false);
      return;
    }

    if (!mounted) return;

    setClosing(true);
    const timer = window.setTimeout(() => {
      setMounted(false);
      setClosing(false);
    }, MODAL_EXIT_MS);

    return () => window.clearTimeout(timer);
  }, [open, mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 motion-reduce:animate-none ${
        closing ? "animate-modal-backdrop-out" : "animate-modal-backdrop"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
    >
      <div
        className={`w-full motion-reduce:animate-none ${
          closing ? "animate-modal-float-out" : "animate-modal-float"
        } ${panelClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
