import {
  FaCog,
  FaEnvelope,
  FaGift,
  FaGraduationCap,
  FaLightbulb,
  FaQuestionCircle,
  FaTrophy,
  FaVoteYea,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import type { SidebarProps } from "../../types/models";

const links = [
  { to: "/home", label: "Home", icon: AiFillHome, end: true },
  { to: "/learn", label: "Learn", icon: FaGraduationCap },
  { to: "/itsc", label: "ITSC 2026", icon: FaTrophy },
  { to: "/my-rewards", label: "My Rewards", icon: FaGift, end: true },
  { to: "/vote", label: "Vote", icon: FaVoteYea, end: true },
  { to: "/propose", label: "Propose", icon: FaLightbulb, end: true },
  { to: "/bgh", label: "BGH Operations", icon: FaCog },
  { to: "/faq", label: "FAQ", icon: FaQuestionCircle, end: true },
  { to: "/contact", label: "Contact", icon: FaEnvelope, end: true },
] as const;

const sidebarActiveClass =
  "translate-x-1 bg-[#3e6b5a] font-semibold";

export default function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  return (
    <aside
      className={`fixed bottom-0 left-0 top-header z-30 w-sidebar overflow-y-auto bg-dull-green transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="px-5 py-[30px]" aria-label="Primary navigation">
        <ul className="flex flex-col gap-3">
          {links.map((link) => {
            const { to, label, icon: Icon } = link;
            const end = "end" in link ? link.end : undefined;

            return (
            <li key={label}>
              <NavLink
                to={to}
                end={end}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-2 py-2 text-[20px] font-normal text-white transition duration-300 hover:translate-x-1 hover:bg-[#3e6b5a] max-[576px]:text-base ${isActive ? sidebarActiveClass : ""}`
                }
              >
                <Icon className="shrink-0 text-[23px] max-[576px]:text-[16px]" aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

