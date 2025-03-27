import "./About.css";
function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__heading">About</h2>
      <div className="about__container">
        <img
          src="https://avatars.githubusercontent.com/u/131300049?v=4"
          alt="Andrew Schouten Git Profile"
          className="about__img"
        />
        <p className="about__text">
          My name is Andrew Schouten and I am a full stack web developer. I have
          experience with HTML, CSS, JavaScript, React, Node.js, Express, and
          MongoDB. I am passionate about creating responsive and user-friendly
          websites. I am always looking to learn new technologies and improve my
          skills. I am excited to work on new projects and collaborate with
          other developers. I am a hard worker and I am dedicated to creating
          high-quality websites. I am excited to work with you on your next
          project!
        </p>
      </div>
    </section>
  );
}
export default About;
