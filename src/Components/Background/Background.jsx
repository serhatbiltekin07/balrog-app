import "./Background.css";
import video1 from "../../Assets/Balrog1.mp4";
import video2 from "../../Assets/Balrog2.mp4";
import video3 from "../../Assets/Balrog3.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
        {/* buraya bir daha bak videoler tek bir tanesi çalışıyor */}
        {/* <source src={video2} type="video/mp4" /> */}
        {/* <source src={video3} type="video/mp4" /> */}
      </video>
    );
  } else if (heroCount == 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount == 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount == 2) {
    return <img src={image3} className="background" alt="" />;
  }
};

export default Background;
