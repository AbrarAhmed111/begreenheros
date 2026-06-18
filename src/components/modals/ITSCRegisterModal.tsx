import { FormEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";
import { Button } from "../ui/Button";

export default function ITSCRegisterModal() {
  const { isRegisterOpen, closeRegister, completeRegistration } = useModal();
  const [entryType, setEntryType] = useState<"individual" | "team">("individual");

  if (!isRegisterOpen) return null;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info("ITSC static registration submitted", new FormData(event.currentTarget));
    completeRegistration();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4" role="dialog" aria-modal="true" aria-labelledby="itsc-register-title">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-mission bg-white p-6 shadow-modal sm:p-9">
        <div className="mb-6 flex items-start justify-between border-b border-gray-200 pb-4">
          <div>
            <h2 id="itsc-register-title" className="text-3xl font-bold text-dull-green">ITSC 2026 Registration</h2>
            <p className="text-muted">Join the International True Sustainability Competition.</p>
          </div>
          <button type="button" onClick={closeRegister} className="rounded-full p-2 text-xl text-muted hover:bg-gray-100" aria-label="Close registration modal"><FaTimes /></button>
        </div>
        <form onSubmit={submit} className="space-y-5">
          <fieldset>
            <legend className="mb-3 font-bold">Registration type</legend>
            <div className="flex gap-6">
              {(["individual", "team"] as const).map((type) => (
                <label key={type} className="flex cursor-pointer items-center gap-2 capitalize">
                  <input type="radio" name="type" value={type} checked={entryType === type} onChange={() => setEntryType(type)} className="h-5 w-5 accent-green" />
                  {type}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="font-semibold">First Name<input required name="first_name" className="mt-1 w-full rounded-xl border border-gray-300 p-3 font-normal focus:border-green focus:outline-none" /></label>
            <label className="font-semibold">Last Name<input required name="last_name" className="mt-1 w-full rounded-xl border border-gray-300 p-3 font-normal focus:border-green focus:outline-none" /></label>
            <label className="font-semibold">Email<input required type="email" name="email" className="mt-1 w-full rounded-xl border border-gray-300 p-3 font-normal focus:border-green focus:outline-none" /></label>
            <label className="font-semibold">University Name<input required name="university" className="mt-1 w-full rounded-xl border border-gray-300 p-3 font-normal focus:border-green focus:outline-none" /></label>
            <label className="font-semibold">Country<select required name="country" className="mt-1 w-full rounded-xl border border-gray-300 bg-white p-3 font-normal focus:border-green focus:outline-none"><option value="">Select your country</option><option>Canada</option><option>Pakistan</option><option>United Kingdom</option><option>United States</option><option>Other</option></select></label>
            <label className="font-semibold">Age<input required type="number" min="1" max="100" name="age" className="mt-1 w-full rounded-xl border border-gray-300 p-3 font-normal focus:border-green focus:outline-none" /></label>
          </div>
          {entryType === "team" && <p className="rounded-xl bg-light-muted p-4 text-navy">Team registrations can include up to 25 members. This static preview captures the team lead.</p>}
          <div className="flex flex-col-reverse justify-end gap-3 border-t border-gray-200 pt-5 sm:flex-row">
            <Button variant="outline" onClick={closeRegister}>Cancel</Button>
            <Button type="submit" variant="gradient">Submit Registration</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

