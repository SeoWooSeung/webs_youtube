import React from "react";
import { portfolioText } from "../../data/port";
import { Link } from "react-router-dom";

const Port = () => {
  return (
    <section id="port">
      <h2>😮 gsap 패럴렉스 효과를 사용하고 싶다면 !</h2>
      <div className="video__inner">
        {portfolioText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Port;
