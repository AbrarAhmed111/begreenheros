import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import type { MissionModalProps } from "../../types/models";
import { Button } from "./Button";

export default function MissionModal({ mission, onClose }: MissionModalProps) {
  const [step, setStep] = useState(0);

  useEffect(() => setStep(0), [mission]);

  if (!mission) return null;
  const current = mission.steps[step];
  const isLast = step === mission.steps.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4" role="dialog" aria-modal="true" aria-labelledby="mission-modal-title">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-mission bg-white shadow-modal">
        <div className="bg-dull-green p-6 text-white sm:p-8">
          <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/15" aria-label="Close mission details"><FaTimes /></button>
          <div className="flex items-center gap-4 pr-10">
            <img src={mission.image} alt="" className="h-16 w-16 rounded-full bg-white object-contain" />
            <div><h2 id="mission-modal-title" className="text-2xl font-bold sm:text-3xl">{mission.title}</h2><p className="italic text-white/80">{mission.intro}</p></div>
          </div>
        </div>
        <div className="min-h-72 p-6 sm:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-green">Step {step + 1} of {mission.steps.length}</p>
          <h3 className="mb-4 text-2xl font-bold text-dull-green">{current.title}</h3>
          <p className="text-lg leading-8 text-body">{current.body}</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 p-5 sm:px-10">
          <Button variant="outline" className={step === 0 ? "invisible" : ""} onClick={() => setStep((value) => value - 1)}><span className="flex items-center gap-2"><FaArrowLeft /> Previous</span></Button>
          {isLast ? <Button onClick={onClose}>Finish</Button> : <Button onClick={() => setStep((value) => value + 1)}><span className="flex items-center gap-2">Next <FaArrowRight /></span></Button>}
        </div>
      </div>
    </div>
  );
}

