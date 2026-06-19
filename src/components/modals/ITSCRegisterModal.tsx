import { FormEvent, useEffect, useState } from "react";
import { FaArrowLeft, FaLeaf, FaPaperPlane, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";
import { Modal, MODAL_EXIT_MS } from "../ui/Modal";

type Step = "type" | "form";
type EntryType = "individual" | "team";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 p-3 text-base font-normal text-body focus:border-blue focus:outline-none";

const countryOptions = ["Canada", "Pakistan", "United Kingdom", "United States", "Other"];

function MemberFields({ namePrefix }: { namePrefix: string }) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-body">
          First Name
          <input required name={`${namePrefix}first_name`} className={inputClass} />
        </label>
        <label className="text-sm font-semibold text-body">
          Last Name
          <input required name={`${namePrefix}last_name`} className={inputClass} />
        </label>
        <label className="text-sm font-semibold text-body">
          Country
          <select required name={`${namePrefix}country`} className={inputClass} defaultValue="">
            <option value="" disabled>
              Select your country
            </option>
            {countryOptions.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-body">
          University Name
          <input required name={`${namePrefix}university`} className={inputClass} />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-semibold text-body sm:col-span-1">
          Email
          <input required type="email" name={`${namePrefix}email`} className={inputClass} />
        </label>
        <label className="text-sm font-semibold text-body">
          Age
          <input required type="number" min="1" max="100" name={`${namePrefix}age`} className={inputClass} />
        </label>
        <label className="text-sm font-semibold text-body">
          Student ID / Code
          <input required name={`${namePrefix}student_id`} className={inputClass} />
        </label>
      </div>
    </>
  );
}

function TypeStepHeader({ onClose }: { onClose: () => void }) {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 text-lg font-light text-gray-400 hover:text-gray-600"
        aria-label="Close registration modal"
      >
        <FaTimes />
      </button>

      <div className="text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#3498DB] to-[#27AE60]">
          <FaLeaf className="text-lg text-[#29cb9b]" aria-hidden="true" />
        </div>
        <h2
          id="itsc-register-title"
          className="text-[32px] font-bold italic leading-[1.35] text-[#3A86B7]"
        >
          Register for International Sustainability Marketing Competition (ITSC)
        </h2>
        <p className="mt-1.5 text-[15px] text-[#777777]">Post-secondary division</p>
      </div>
    </>
  );
}

function ModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 text-xl text-gray-400 hover:text-gray-600"
        aria-label="Close registration modal"
      >
        <FaTimes />
      </button>

      <div className="text-center">
        <img
          src="/img/bgh-logo.jpeg"
          alt="Be Green Heroes"
          className="mx-auto mb-5 h-[72px] w-[72px] rounded-full object-cover"
        />
        <h2
          id="itsc-register-title"
          className="text-[22px] font-bold italic leading-snug text-blue"
        >
          Register for International Sustainability Marketing Competition (ITSC)
        </h2>
        <p className="mt-2 text-[20px] text-muted">Post-secondary division</p>
      </div>
    </>
  );
}

export default function ITSCRegisterModal() {
  const { isRegisterOpen, closeRegister, completeRegistration } = useModal();
  const [step, setStep] = useState<Step>("type");
  const [entryType, setEntryType] = useState<EntryType>("individual");
  const [teamMembers, setTeamMembers] = useState<number[]>([]);
  const [nextMemberId, setNextMemberId] = useState(0);

  useEffect(() => {
    if (isRegisterOpen) return;

    const timer = window.setTimeout(() => {
      setStep("type");
      setEntryType("individual");
      setTeamMembers([]);
      setNextMemberId(0);
    }, MODAL_EXIT_MS);

    return () => window.clearTimeout(timer);
  }, [isRegisterOpen]);

  useEffect(() => {
    if (step === "type" || entryType === "individual") {
      setTeamMembers([]);
      setNextMemberId(0);
    }
  }, [step, entryType]);

  const handleClose = () => closeRegister();

  const addTeamMember = () => {
    setTeamMembers((members) => [...members, nextMemberId]);
    setNextMemberId((id) => id + 1);
  };

  const removeTeamMember = (id: number) => {
    setTeamMembers((members) => members.filter((memberId) => memberId !== id));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info("ITSC static registration submitted", new FormData(event.currentTarget));
    completeRegistration();
  };

  const entryLabel = entryType === "team" ? "Team" : "Individual";

  return (
    <Modal
      open={isRegisterOpen}
      labelledBy="itsc-register-title"
      panelClassName={`relative overflow-y-auto shadow-modal ${
        step === "type"
          ? "max-w-[750px] rounded-[24px] bg-white px-8 pb-12 pt-12 sm:px-12"
          : "max-h-[92vh] max-w-4xl rounded-mission bg-white px-10 py-10"
      }`}
    >
        {step === "type" ? (
          <TypeStepHeader onClose={handleClose} />
        ) : (
          <ModalHeader onClose={handleClose} />
        )}

        {step === "type" ? (
          <div className="mt-10 text-center">
            <p className="mb-6 text-[28px] font-semibold text-[#333333]">Select Registration Type</p>

            <div className="mb-12 flex items-center justify-center gap-16 sm:gap-24">
              {(["individual", "team"] as const).map((type) => (
                <label key={type} className="flex cursor-pointer items-center gap-2.5 capitalize">
                  <input
                    type="radio"
                    name="registration_type"
                    value={type}
                    checked={entryType === type}
                    onChange={() => setEntryType(type)}
                    className="h-[18px] w-[18px] accent-[#3A86B7]"
                  />
                  <span className="text-[20px] font-normal text-[#333333]">{type}</span>
                </label>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setStep("form")}
              className="min-w-[110px] rounded-pill bg-gradient-to-r from-[#3498DB] to-[#27AE60] px-12 py-3.5 text-[20px]  text-white shadow-sm transition hover:scale-105"
            >
              Continue
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="mb-6 border-t border-gray-200 pt-5">
              <h3 className="text-center text-lg font-semibold text-body sm:text-xl">
                Registration form for {entryLabel} entry
              </h3>
            </div>

            <MemberFields namePrefix="" />

            {entryType === "team" && (
              <div className="mt-6 space-y-4">
                {teamMembers.map((memberId, index) => (
                  <div
                    key={memberId}
                    className="relative rounded-lg border border-dashed border-gray-300 bg-[#f8fafc] p-4 pt-10 sm:p-5 sm:pt-10"
                  >
                    <button
                      type="button"
                      onClick={() => removeTeamMember(memberId)}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded border border-red-400 text-red-500 transition hover:bg-red-50"
                      aria-label={`Remove team member ${index + 2}`}
                    >
                      <FaTrash className="text-sm" aria-hidden="true" />
                    </button>
                    <MemberFields namePrefix={`team_member_${memberId}_`} />
                  </div>
                ))}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={addTeamMember}
                    className="rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-white shadow-[0_0_12px_rgba(0,112,192,0.35)] transition hover:opacity-90"
                  >
                    Add team members <FaPlus className="ml-1 inline" />
                  </button>
                </div>
              </div>
            )}

            <input type="hidden" name="type" value={entryType} />

            <div className="mt-8 flex flex-col-reverse items-center justify-between gap-3 border-t border-gray-200 pt-5 sm:flex-row">
              <button
                type="button"
                onClick={() => setStep("type")}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-2.5 font-semibold text-body transition hover:bg-gray-50"
              >
                <FaArrowLeft aria-hidden="true" />
                Previous
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gradient-blue to-gradient-green px-8 py-2.5 font-bold text-white shadow-md transition hover:scale-105"
              >
                <FaPaperPlane aria-hidden="true" />
                Register
              </button>
            </div>
          </form>
        )}
    </Modal>
  );
}
