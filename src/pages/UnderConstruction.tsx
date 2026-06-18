import { FaCog, FaHardHat } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <section className="flex min-h-[calc(100vh-110px)] items-center justify-center"><div className="w-full max-w-[90%] rounded-[36px] bg-gradient-to-b from-light-muted to-gray-100 px-6 py-14 text-center shadow-lg sm:px-10"><FaHardHat className="mx-auto text-6xl text-blue" /><h1 className="mt-5 text-[clamp(28px,3vw,52px)] font-bold text-navy">We are evolving</h1><p className="mx-auto mt-4 max-w-3xl text-[clamp(17px,1.3vw,24px)] text-muted">This section is currently under maintenance to provide you with a better experience.</p><div className="my-7 flex justify-center gap-2 text-4xl text-green"><FaCog /><FaCog className="mt-4" /></div><p className="mx-auto max-w-3xl text-[clamp(17px,1.3vw,24px)] text-muted">We are working on new features and visual improvements following the Be Green Heroes guidelines.</p><Link to="/home" className="mt-9 inline-block rounded-pill px-8 py-3 font-semibold text-white bg-gradient-to-r from-gradient-blue to-gradient-green">← Back to Home</Link></div></section>
  );
}
