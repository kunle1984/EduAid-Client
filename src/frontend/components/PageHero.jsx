import { heroImages } from "../../assets/assets";
const { hero1, hero2, hero3, hero4, hero5 } = heroImages;

const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.6)",
  overlayOpacity = 0.6,
}) => {
  const heroStyle = {
    backgroundImage: `url(${hero3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "100px 0",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  };

  return (
    <section style={heroStyle} className="text-center text-light">
      <div style={overlayStyle}></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <p className="text-warning mb-2">{subtitle}</p>
        <h1 className="display-4 fw-bold">{title}</h1>
      </div>
    </section>
  );
};

export default PageHero;
