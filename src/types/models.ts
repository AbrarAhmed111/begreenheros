import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ModalContextValue {
    isRegisterOpen: boolean;
    isSuccessOpen: boolean;
    openRegister: () => void;
    closeRegister: () => void;
    closeSuccess: () => void;
    completeRegistration: () => void;
}

export interface ModalProviderProps {
    children: ReactNode;
}

export interface HeaderProps {
    pageTitle: string;
    onMenuToggle: () => void;
}

export interface SidebarProps {
    isOpen: boolean;
    onNavigate: () => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "green" | "blue" | "black" | "gradient" | "outline";
}

export interface QuoteProps {
    children: ReactNode;
}

export interface MissionStep {
    title: string;
    body?: string;
    sections?: Array<{
        text?: string;
        bullets?: string[];
    }>;
}

export interface Mission {
    title: string;
    tagline: string;
    image: string;
    intro: string;
    steps: MissionStep[];
}

export interface MissionModalProps {
    mission: Mission | null;
    onClose: () => void;
}

export interface HeroProfile {
    name: string;
    symbol: string;
    role: string;
    descriptor: string;
    image: string;
    contexts: string[];
}

export interface HeroDetailPageProps {
    hero: HeroProfile;
}

export interface AssetSection {
    heading?: string;
    body: string;
}

export interface AssetDetail {
    title: string;
    image: string;
    circular?: boolean;
    sections: AssetSection[];
}

export interface AssetDetailPageProps {
    asset: AssetDetail;
}

export interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}
