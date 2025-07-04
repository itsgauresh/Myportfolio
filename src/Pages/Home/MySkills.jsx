import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data/index.json";

export default function MySkills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="skills--section" id="mySkills" data-aos="fade-up">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="skills--section--card"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100} // adds staggered animation
          >
            <div className="skills--section--img">
              <img
                src={item.src}
                alt={item.title}
                width="54"
                height="54"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
