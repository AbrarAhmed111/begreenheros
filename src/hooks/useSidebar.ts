import { useState } from "react";

export function useSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return {
        isOpen,
        toggle: () => setIsOpen((open) => !open),
        close: () => setIsOpen(false),
    };
}
