import "./CyanWave.css";
import cyanWave from "../../../assets/cyanwave.svg";

const CyanWave = () => {
  return (
    <div className="cyan-wave">
      <img
        src={cyanWave}
        alt="Hydra Curls Cyan Wave"
        className="cyan-wave-image"
      />
    </div>
  );
};

export default CyanWave;