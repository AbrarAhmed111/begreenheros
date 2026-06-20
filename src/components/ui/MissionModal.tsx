import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import type { MissionModalProps, MissionStep } from "../../types/models";
import { Button } from "./Button";
import { Modal } from "./Modal";

function RichText({ text }: { text: string }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return (
        <>
            {parts.map((part, index) =>
                part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={index}>{part.slice(2, -2)}</strong>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </>
    );
}

function MissionStepContent({
    body,
    sections,
}: Pick<MissionStep, "body" | "sections">) {
    if (sections?.length) {
        return (
            <div className="space-y-4 text-base leading-7 text-body sm:text-lg sm:leading-8">
                {sections.map((section, index) => (
                    <div key={index} className="space-y-3">
                        {section.text && (
                            <p>
                                <RichText text={section.text} />
                            </p>
                        )}
                        {section.bullets && (
                            <ul className="list-disc space-y-2 pl-5 marker:text-green">
                                {section.bullets.map((item) => (
                                    <li key={item}>
                                        <RichText text={item} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <p className="text-base leading-7 text-body sm:text-lg sm:leading-8">
            {body}
        </p>
    );
}

export default function MissionModal({ mission, onClose }: MissionModalProps) {
    const [step, setStep] = useState(0);
    const [activeMission, setActiveMission] = useState(mission);

    useEffect(() => setStep(0), [mission]);

    useEffect(() => {
        if (mission) setActiveMission(mission);
    }, [mission]);

    if (!activeMission) return null;

    const current = activeMission.steps[step];
    const isLast = step === activeMission.steps.length - 1;

    return (
        <Modal
            open={Boolean(mission)}
            labelledBy="mission-modal-title"
            panelClassName="relative flex max-h-[90vh] max-w-3xl flex-col overflow-hidden rounded-mission bg-white shadow-modal"
        >
            <div className="shrink-0 bg-dull-green p-6 text-white sm:p-8">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/15"
                    aria-label="Close mission details"
                >
                    <FaTimes />
                </button>
                <div className="flex items-center gap-4 pr-10">
                    <img
                        src={activeMission.image}
                        alt=""
                        className="h-16 w-16 rounded-full bg-white object-contain"
                    />
                    <div>
                        <h2
                            id="mission-modal-title"
                            className="text-2xl font-bold sm:text-3xl"
                        >
                            {activeMission.title}
                        </h2>
                        <p className="italic text-white/80">
                            {activeMission.intro}
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-10">
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-green">
                    Step {step + 1} of {activeMission.steps.length}
                </p>
                <h3 className="mb-4 text-2xl font-bold text-dull-green">
                    {current.title}
                </h3>
                <MissionStepContent
                    body={current.body}
                    sections={current.sections}
                />
            </div>
            <div className="flex shrink-0 items-center justify-between border-t border-gray-200 px-6 py-5 sm:px-10 sm:py-6">
                <Button
                    variant="outline"
                    className={step === 0 ? "invisible" : ""}
                    onClick={() => setStep((value) => value - 1)}
                >
                    <span className="flex items-center gap-2">
                        <FaArrowLeft /> Previous
                    </span>
                </Button>
                {isLast ? (
                    <Button onClick={onClose}>Finish</Button>
                ) : (
                    <Button onClick={() => setStep((value) => value + 1)}>
                        <span className="flex items-center gap-2">
                            Next <FaArrowRight />
                        </span>
                    </Button>
                )}
            </div>
        </Modal>
    );
}
