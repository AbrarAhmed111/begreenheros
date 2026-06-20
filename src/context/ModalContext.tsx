import { createContext, useMemo, useState } from "react";
import type { ModalContextValue, ModalProviderProps } from "../types/models";

export const ModalContext = createContext<ModalContextValue | undefined>(
    undefined
);

export function ModalProvider({ children }: ModalProviderProps) {
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isSuccessOpen, setSuccessOpen] = useState(false);

    const value = useMemo<ModalContextValue>(
        () => ({
            isRegisterOpen,
            isSuccessOpen,
            openRegister: () => setRegisterOpen(true),
            closeRegister: () => setRegisterOpen(false),
            closeSuccess: () => setSuccessOpen(false),
            completeRegistration: () => {
                setRegisterOpen(false);
                setSuccessOpen(true);
            },
        }),
        [isRegisterOpen, isSuccessOpen]
    );

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
}
