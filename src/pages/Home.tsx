import { useState } from "react";
import { Link } from "react-router-dom";
import MissionModal from "../components/ui/MissionModal";
import { useModal } from "../hooks/useModal";
import type { Mission } from "../types/models";
import { missions } from "../utils/content";

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
      className="card-link-wrapper"
      onClick={() => onSelect(mission)}
    >
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <img src={mission.image} alt="" />
            <div>
              <h5>{mission.title}</h5>
              <p className="card-text">{mission.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Home() {
  const { openRegister } = useModal();
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const firstRow = missions.slice(0, 2);
  const secondRow = missions.slice(2, 4);

  return (
    <>
      <div className="flex justify-end">
        <button type="button" id="register-btn" onClick={openRegister}>
          Register for ITSC 2026
        </button>
      </div>

      <div id="missions-cnt">
        <h1>Your Power to Make it Right</h1>

        <div className="w-full">
          <div className="missions-grid">
            {firstRow.map((mission) => (
              <MissionCard
                key={mission.title}
                mission={mission}
                onSelect={setSelectedMission}
              />
            ))}
          </div>

          <div className="missions-grid">
            {secondRow.map((mission) => (
              <MissionCard
                key={mission.title}
                mission={mission}
                onSelect={setSelectedMission}
              />
            ))}
          </div>

          <Link to="/creed" className="creed-card">
            <div className="creed-card-image">
              <img
                src="/img/bgh-heros.png"
                alt="Green Heroes characters"
              />
            </div>
            <div className="creed-card-text">
              <h2>Green Heroes Creed</h2>
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
