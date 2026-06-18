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
  { to: "/home", label: "Home", icon: AiFillHome },
  { to: "/learn", label: "Learn", icon: FaGraduationCap },
  { to: "/itsc", label: "ITSC 2026", icon: FaTrophy },
  { to: "/under-construction", label: "My Rewards", icon: FaGift },
  { to: "/under-construction", label: "Vote", icon: FaVoteYea },
  { to: "/under-construction", label: "Propose", icon: FaLightbulb },
  { to: "/bgh", label: "BGH Operations", icon: FaCog },
  { to: "/under-construction", label: "FAQ", icon: FaQuestionCircle },
  { to: "/contact", label: "Contact", icon: FaEnvelope },
];

export default function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  return (
    <aside
      className={`fixed bottom-0 left-0 top-header z-30 w-sidebar overflow-y-auto bg-dull-green transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="px-5 py-[30px]" aria-label="Primary navigation">
        <ul className="flex flex-col gap-3">
          {links.map(({ to, label, icon: Icon }) => (
            <li key={label}>
              <NavLink
                to={to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-2 py-2 text-[20px] font-normal text-white transition duration-300 hover:translate-x-1 hover:bg-hover-green max-[576px]:text-base ${isActive ? "translate-x-1 bg-hover-green" : ""}`
                }
              >
                <Icon className="shrink-0 text-[23px] max-[576px]:text-[16px]" aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

