function Projects() {
  const projects = [
    {
      title: "ROYAL RESTAURANT",
      description:
        "Developed a modern and responsive restaurant website with an elegant design and seamless user experience.",
      link: "https://royalrestaurants-vishwanath.netlify.app/",
    },
    {
      title: "XYZ Project 2",
      description:
        "Short description about your project. Mention key features and technologies used.",
      link: "https://xyz-project-2.netlify.app",
    },
    {
      title: "XYZ Project 3",
      description:
        "Short description about your project. Add details about functionality and user experience.",
      link: "https://xyz-project-3.vercel.app",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="skills-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;