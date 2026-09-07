import "./CloudSection.css";
import cloud from "../../../assets/cloud.png";

const CloudSection = () => {
  return (
    <div className="cloud-section">
      <img src={cloud} alt="Clouds" className="cloud-image" />
    </div>
  );
};

export default CloudSection;