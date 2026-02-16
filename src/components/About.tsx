import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para pt-4 text-xl leading-relaxed">
          I architecture intelligence. Bridging
          <span style={{ color: "var(--accentColor)" }} className="font-bold"> Full Stack Engineering</span> with
          <span style={{ color: "var(--accentColor)" }} className="font-bold"> AI</span> to build systems that think.
        </p>
        <p className="para pt-4 text-sm opacity-60 font-mono uppercase tracking-widest">
          Building Cognify • 300+ LeetCode • Optimization Obsessed
        </p>
      </div>
    </div>
  );
};

export default About;
