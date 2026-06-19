import { FaCog, FaHardHat } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UnderConstruction() {
    return (
        <section className="flex min-h-[calc(100vh-110px)] items-center justify-center">
            <div className="w-full max-w-[90%] rounded-[36px] bg-gradient-to-b from-light-muted to-gray-100 px-6 py-14 text-center shadow-lg sm:px-10">
                <FaHardHat className="mx-auto text-6xl text-blue" />
                <h1 className="mt-5 text-[28px] font-bold text-navy sm:text-[40px] md:text-[52px]">
                    We are evolving
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-[17px] text-muted sm:text-xl md:text-2xl">
                    This section is currently under maintenance to provide you
                    with a better experience.
                </p>
                <div className="my-7 flex justify-center gap-2 text-4xl text-green">
                    <FaCog
                        className="animate-gear-spin-cw"
                        aria-hidden="true"
                    />
                    <FaCog
                        className="mt-4 animate-gear-spin-ccw"
                        aria-hidden="true"
                    />
                </div>
                <p className="mx-auto max-w-3xl text-[17px] text-muted sm:text-xl md:text-2xl">
                    We are working on new features and visual improvements
                    following the Be Green Heroes guidelines.
                </p>
                <Link
                    to="/home"
                    className="mt-9 inline-block rounded-pill bg-gradient-to-r from-gradient-blue to-gradient-green px-8 py-3 font-semibold text-white"
                >
                    ← Back to Home
                </Link>
            </div>
        </section>
    );
}
