import { lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import GuestLayout from "./components/layout/GuestLayout";
import ScrollToTop from "./components/ScrollToTop";

const Welcome = lazy(() => import("./pages/Welcome"));
const Home = lazy(() => import("./pages/Home"));
const Creed = lazy(() => import("./pages/Creed"));
const Learn = lazy(() => import("./pages/Learn"));
const LearnDownload = lazy(() => import("./pages/LearnDownload"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Itsc = lazy(() => import("./pages/Itsc"));
const Bgh = lazy(() => import("./pages/Bgh"));
const OfficialDocuments = lazy(() => import("./pages/OfficialDocuments"));
const BrandAssets = lazy(() => import("./pages/BrandAssets"));
const Contact = lazy(() => import("./pages/Contact"));
const UnderConstruction = lazy(() => import("./pages/UnderConstruction"));
const Subscription = lazy(() => import("./pages/Subscription"));
const Individual = lazy(() => import("./pages/Individual"));
const Institutional = lazy(() => import("./pages/Institutional"));
const HeroMia = lazy(() => import("./pages/heros/HeroMia"));
const HeroElio = lazy(() => import("./pages/heros/HeroElio"));
const HeroLina = lazy(() => import("./pages/heros/HeroLina"));
const HeroNiko = lazy(() => import("./pages/heros/HeroNiko"));
const AssetBgh = lazy(() => import("./pages/brand-assets/AssetBgh"));
const AssetBgh1 = lazy(() => import("./pages/brand-assets/AssetBgh1"));
const AssetBgh2 = lazy(() => import("./pages/brand-assets/AssetBgh2"));
const AssetBgh3 = lazy(() => import("./pages/brand-assets/AssetBgh3"));
const AssetGToken = lazy(() => import("./pages/brand-assets/AssetGToken"));
const AssetGNonToken = lazy(
    () => import("./pages/brand-assets/AssetGNonToken")
);
const AssetMc = lazy(() => import("./pages/brand-assets/AssetMc"));
const AssetMcc = lazy(() => import("./pages/brand-assets/AssetMcc"));
const AssetMco = lazy(() => import("./pages/brand-assets/AssetMco"));
const AssetUc = lazy(() => import("./pages/brand-assets/AssetUc"));
const AssetMuc = lazy(() => import("./pages/brand-assets/AssetMuc"));
const AssetPuc = lazy(() => import("./pages/brand-assets/AssetPuc"));
const AssetVuc = lazy(() => import("./pages/brand-assets/AssetVuc"));

function loading(element: ReactNode) {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center text-2xl font-bold text-dull-green">
                    Loading…
                </div>
            }
        >
            {element}
        </Suspense>
    );
}

function RootLayout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/", element: loading(<Welcome />) },
            {
                element: <GuestLayout />,
                children: [
                    { path: "/home", element: loading(<Home />) },
                    { path: "/creed", element: loading(<Creed />) },
                    { path: "/learn", element: loading(<Learn />) },
                    {
                        path: "/learn/download",
                        element: loading(<LearnDownload />),
                    },
                    {
                        path: "/learn/case-study",
                        element: loading(<CaseStudy />),
                    },
                    { path: "/itsc", element: loading(<Itsc />) },
                    { path: "/bgh", element: loading(<Bgh />) },
                    {
                        path: "/bgh/official-documents",
                        element: loading(<OfficialDocuments />),
                    },
                    {
                        path: "/brand-assets",
                        element: loading(<BrandAssets />),
                    },
                    { path: "/contact", element: loading(<Contact />) },
                    {
                        path: "/my-rewards",
                        element: loading(<UnderConstruction />),
                    },
                    { path: "/vote", element: loading(<UnderConstruction />) },
                    {
                        path: "/propose",
                        element: loading(<UnderConstruction />),
                    },
                    { path: "/faq", element: loading(<UnderConstruction />) },
                    {
                        path: "/under-construction",
                        element: loading(<UnderConstruction />),
                    },
                    {
                        path: "/subscription",
                        element: loading(<Subscription />),
                    },
                    { path: "/individual", element: loading(<Individual />) },
                    {
                        path: "/institutional",
                        element: loading(<Institutional />),
                    },
                    { path: "/hero-mia", element: loading(<HeroMia />) },
                    { path: "/hero-elio", element: loading(<HeroElio />) },
                    { path: "/hero-lina", element: loading(<HeroLina />) },
                    { path: "/hero-niko", element: loading(<HeroNiko />) },
                    { path: "/asset-bgh", element: loading(<AssetBgh />) },
                    { path: "/asset-bgh-1", element: loading(<AssetBgh1 />) },
                    { path: "/asset-bgh-2", element: loading(<AssetBgh2 />) },
                    { path: "/asset-bgh-3", element: loading(<AssetBgh3 />) },
                    {
                        path: "/asset-g-token",
                        element: loading(<AssetGToken />),
                    },
                    {
                        path: "/asset-g-non-token",
                        element: loading(<AssetGNonToken />),
                    },
                    { path: "/asset-mc", element: loading(<AssetMc />) },
                    { path: "/asset-mcc", element: loading(<AssetMcc />) },
                    { path: "/asset-mco", element: loading(<AssetMco />) },
                    { path: "/asset-uc", element: loading(<AssetUc />) },
                    { path: "/asset-muc", element: loading(<AssetMuc />) },
                    { path: "/asset-puc", element: loading(<AssetPuc />) },
                    { path: "/asset-vuc", element: loading(<AssetVuc />) },
                ],
            },
            { path: "*", element: <Navigate to="/" replace /> },
        ],
    },
]);

export default router;
