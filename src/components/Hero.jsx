import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>VISHWANATH</h1>

        <div className="typing">
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "AIML Student",
              2000,
              "Full Stack Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p>
          Passionate AIML student and web developer focused on
          building modern, scalable and visually stunning web
          applications.
        </p>

        <div className="stats">

          <div>
            <h3>10+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>AIML</h3>
            <span>Student</span>
          </div>

          <div>
            <h3>Full Stack</h3>
            <span>Developer</span>
          </div>

        </div>

        <div className="hero-buttons">

          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;