import projects from "../data/projects";

function ProjectDirectory({
  setSelectedCategory,
  setSelectedProject
}) {

  const roboticsProjects =
    Object.entries(projects).filter(
      ([, project]) =>
        project.category === "Robotics"
    );

  const controlsProjects =
    Object.entries(projects).filter(
      ([, project]) =>
        project.category === "Controls"
    );

  const designProjects =
    Object.entries(projects).filter(
      ([, project]) =>
        project.category === "Design"
    );

  const scrollToSection = (
    sectionId
  ) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  };

  return (
    <div className="category-panel">

      <h2>Projects</h2>

      <div className="directory-section">

        <button
          className="tile-category"
          onClick={() => {
            setSelectedCategory(
              "Robotics"
            );
            scrollToSection(
              "robotics-section"
            );
          }}
        >
          ▼ Robotics
        </button>

        <div className="directory-projects">

          {roboticsProjects.map(
            ([id, project]) => (
              <button
                key={id}
                onClick={() =>
                  setSelectedProject(id)
                }
              >
                {project.title}
              </button>
            )
          )}

        </div>

        <button
          className="tile-category"
          onClick={() => {
            setSelectedCategory(
              "Controls"
            );
            scrollToSection(
              "controls-section"
            );
          }}
        >
          ▼ Controls
        </button>

        <div className="directory-projects">

          {controlsProjects.map(
            ([id, project]) => (
              <button
                key={id}
                onClick={() =>
                  setSelectedProject(id)
                }
              >
                {project.title}
              </button>
            )
          )}

        </div>

        <button
          className="tile-category"
          onClick={() => {
            setSelectedCategory(
              "Design"
            );
            scrollToSection(
              "design-section"
            );
          }}
        >
          ▼ Design
        </button>

        <div className="directory-projects">

          {designProjects.map(
            ([id, project]) => (
              <button
                key={id}
                onClick={() =>
                  setSelectedProject(id)
                }
              >
                {project.title}
              </button>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectDirectory;