import { Outlet, useLocation } from "react-router-dom";
import { useSidebar } from "../../hooks/useSidebar";
import ITSCRegisterModal from "../modals/ITSCRegisterModal";
import SuccessModal from "../modals/SuccessModal";
import Header from "./Header";
import Sidebar from "./Sidebar";

const pageTitles: Record<string, string> = {
    "/home": "Our Missions and Rewards",
    "/creed": "Our Missions and Rewards",
    "/learn": "Learn and Earn",
    "/learn/download": "Learn and Earn",
    "/learn/case-study": "Learn and Earn",
    "/itsc": "ITSC 2026",
    "/bgh": "BGH Operations",
    "/bgh/official-documents": "BGH Operations",
    "/brand-assets": "BGH Operations",
    "/contact": "Contact Us",
    "/subscription": "Learn and Earn",
    "/individual": "Learn and Earn",
    "/institutional": "Learn and Earn",
    "/my-rewards": "Learn and Earn",
    "/vote": "Learn and Earn",
    "/propose": "Learn and Earn",
    "/faq": "Learn and Earn",
    "/under-construction": "Learn and Earn",
};

export default function GuestLayout() {
    const sidebar = useSidebar();
    const { pathname } = useLocation();
    const pageTitle =
        pageTitles[pathname] ??
        (pathname.startsWith("/hero-") || pathname.startsWith("/asset-")
            ? "BGH Operations"
            : "Be Green Heroes");

    return (
        <div className="min-h-screen bg-white text-base leading-[1.7] text-body md:text-lg">
            <Header pageTitle={pageTitle} onMenuToggle={sidebar.toggle} />
            <Sidebar isOpen={sidebar.isOpen} onNavigate={sidebar.close} />
            {sidebar.isOpen && (
                <button
                    type="button"
                    className="fixed inset-0 z-20 bg-black/40 lg:hidden"
                    onClick={sidebar.close}
                    aria-label="Close navigation overlay"
                />
            )}
            <main className="min-h-[calc(100vh-70px)] pt-header lg:ml-sidebar">
                <div className="min-h-[calc(100vh-70px)] p-4 sm:p-5">
                    <Outlet />
                </div>
            </main>
            <ITSCRegisterModal />
            <SuccessModal />
        </div>
    );
}
