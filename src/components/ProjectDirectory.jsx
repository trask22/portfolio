import projects from "../data/projects";

function ProjectDirectory({
  setSelectedProject,
  setActiveDirectory
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

  const openProject = (id) => {
    setSelectedProject(id);
    setActiveDirectory(null);
  };

  return (
    <div className="directory-panel">

      <h2>Projects</h2>

      <div className="directory-section">

        <div className="tile-category">
          Robotics
        </div>

        {roboticsProjects.map(
          ([id, project]) => (
            <button
              key={id}
              onClick={() =>
                openProject(id)
              }
            >
              {project.title}
            </button>
          )
        )}

      </div>

      <div className="directory-section">

        <div className="tile-category">
          Controls
        </div>

        {controlsProjects.map(
          ([id, project]) => (
            <button
              key={id}
              onClick={() =>
                openProject(id)
              }
            >
              {project.title}
            </button>
          )
        )}

      </div>

      <div className="directory-section">

        <div className="tile-category">
          Design
        </div>

        {designProjects.map(
          ([id, project]) => (
            <button
              key={id}
              onClick={() =>
                openProject(id)
              }
            >
              {project.title}
            </button>
          )
        )}

      </div>

    </div>
  );
}

export default ProjectDirectory;