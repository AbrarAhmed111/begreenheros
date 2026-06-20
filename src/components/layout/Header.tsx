import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { HeaderProps } from "../../types/models";

export default function Header({ pageTitle, onMenuToggle }: HeaderProps) {
    return (
        <header className="fixed inset-x-0 top-0 z-40 flex h-header items-center bg-dull-green px-3 py-2 text-white sm:px-5">
            <nav
                className="flex w-full items-center justify-between"
                aria-label="Site header"
            >
                <Link
                    to="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="Be Green Heroes welcome page"
                >
                    <img
                        src="/img/bgh-logo.jpeg"
                        className="h-12 w-12 rounded-full object-cover sm:h-12 sm:w-12"
                        alt="Be Green Heroes circular logo"
                    />
                    <span className="text-[18px] font-bold uppercase leading-[1.15] sm:text-[18px] lg:hidden">
                        BE GREEN
                        <br />
                        HEROES
                    </span>
                    <img
                        src="/img/logo.png"
                        className="hidden h-14 w-auto object-contain lg:block"
                        alt="Be Green Heroes wordmark"
                    />
                </Link>

                <p className="hidden flex-1 px-3 text-center text-lg font-semibold lg:block lg:text-xl xl:text-[28px]">
                    {pageTitle}
                </p>

                <button
                    type="button"
                    onClick={onMenuToggle}
                    className="rounded-lg p-3 text-2xl text-white transition hover:bg-hover-green lg:hidden"
                    aria-label="Toggle navigation menu"
                >
                    <FaBars />
                </button>
            </nav>
        </header>
    );
}
