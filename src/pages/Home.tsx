import { useState } from "react";
import { Link } from "react-router-dom";
import MissionModal from "../components/ui/MissionModal";
import { useModal } from "../hooks/useModal";
import type { Mission } from "../types/models";
import { missions } from "../utils/content";

const registerButtonClass =
    "w-fit rounded-pill bg-gradient-to-br from-gradient-blue to-gradient-green px-[22px] py-2.5 text-[15px] font-normal leading-normal text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition duration-300 hover:scale-105 hover:opacity-90 sm:px-[38px] sm:py-5 sm:text-[22px]";

const missionGridClass = "grid w-full grid-cols-1 gap-6 sm:grid-cols-2";

function MissionCard({
    mission,
    onSelect,
}: {
    mission: Mission;
    onSelect: (mission: Mission) => void;
}) {
    return (
        <button
            type="button"
            className="block w-full cursor-pointer border-none bg-transparent p-0 text-left text-inherit"
            onClick={() => onSelect(mission)}
        >
            <div className="flex h-full min-h-[180px] items-center justify-center rounded-[18px] border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card max-md:min-h-0 lg:min-h-[200px] lg:px-7 lg:py-8">
                <div className="w-full p-0">
                    <div className="flex w-full items-start gap-3.5 md:items-center md:gap-[22px]">
                        <img
                            src={mission.image}
                            alt=""
                            className="h-[55px] w-[55px] shrink-0 rounded-full object-contain md:h-[70px] md:w-[70px]"
                        />
                        <div>
                            <h5 className="mb-2 text-lg font-bold leading-snug text-body md:text-[25px] xl:text-[30px]">
                                {mission.title}
                            </h5>
                            <p className="mb-0 text-sm leading-normal text-[#555] md:text-[22px]">
                                {mission.tagline}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default function Home() {
    const { openRegister } = useModal();
    const [selectedMission, setSelectedMission] = useState<Mission | null>(
        null
    );

    const firstRow = missions.slice(0, 2);
    const secondRow = missions.slice(2, 4);

    return (
        <>
            <div className="flex justify-end">
                <button
                    type="button"
                    className={registerButtonClass}
                    onClick={openRegister}
                >
                    Register for ITSC 2026
                </button>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-5 p-5 xl:mx-auto xl:max-w-[1700px]">
                <h1 className="mb-2.5 text-center text-[32px] font-bold italic leading-tight text-blue md:text-[40px] xl:text-[50px]">
                    Your Power to Make it Right
                </h1>

                <div className="w-full">
                    <div className={missionGridClass}>
                        {firstRow.map((mission) => (
                            <MissionCard
                                key={mission.title}
                                mission={mission}
                                onSelect={setSelectedMission}
                            />
                        ))}
                    </div>

                    <div className={`${missionGridClass} mt-2`}>
                        {secondRow.map((mission) => (
                            <MissionCard
                                key={mission.title}
                                mission={mission}
                                onSelect={setSelectedMission}
                            />
                        ))}
                    </div>

                    <Link
                        to="/creed"
                        className="mt-5 flex w-full flex-col items-center justify-center gap-4 rounded-creed border-2 border-soft-border bg-white p-6 text-inherit no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:flex-row md:gap-6 md:px-12 md:py-10"
                    >
                        <div className="flex w-full max-w-full shrink-0 items-center justify-center overflow-hidden md:w-auto">
                            <img
                                src="/img/bgh-heros.png"
                                alt="Green Heroes characters"
                                className="block h-auto w-full max-w-full object-contain md:w-auto md:max-w-[490px]"
                            />
                        </div>
                        <div className="flex items-center justify-center text-center">
                            <h2 className="m-0 text-2xl font-bold leading-tight text-black md:text-[28px] xl:text-[42px]">
                                Green Heroes Creed
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>

            <MissionModal
                mission={selectedMission}
                onClose={() => setSelectedMission(null)}
            />
        </>
    );
}
