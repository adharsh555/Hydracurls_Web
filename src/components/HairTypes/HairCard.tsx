import "./HairTypes.css";

type HairCardProps = {
  type: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

const HairCard = ({
  type,
  image,
  title,
  subtitle,
  description,
}: HairCardProps) => {
  return (
    <div className="hair-card">

      <img src={image} alt={type} className="hair-card-image" />

      {/* Default Label */}
      

      {/* Hover Overlay */}
      <div className="hair-card-overlay">

        <h3>{title}</h3>

        <h4>{subtitle}</h4>

        <p>{description}</p>

        

      </div>

    </div>
  );
};

export default HairCard;