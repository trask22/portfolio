import projects from "../data/projects";

function ProjectTiles({
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
    <div className="tiles-panel">

      <h2 id="robotics-section">
        Robotics
      </h2>

      <div className="tile-grid">

        {roboticsProjects.map(
          ([id, project]) => (

            <button
              key={id}
              className="project-tile"
              onClick={() =>
                openProject(id)
              }
            >

              <div className="tile-image">
                Image
              </div>

              <div className="tile-title">
                {project.title}
              </div>

            </button>

          )
        )}

      </div>

      <h2
        id="controls-section"
        style={{
          marginTop: "2rem"
        }}
      >
        Controls
      </h2>

      <div className="tile-grid">

        {controlsProjects.map(
          ([id, project]) => (

            <button
              key={id}
              className="project-tile"
              onClick={() =>
                openProject(id)
              }
            >

              <div className="tile-image">
                Image
              </div>

              <div className="tile-title">
                {project.title}
              </div>

            </button>

          )
        )}

      </div>

      <h2
        id="design-section"
        style={{
          marginTop: "2rem"
        }}
      >
        Design
      </h2>

      <div className="tile-grid">

        {designProjects.map(
          ([id, project]) => (

            <button
              key={id}
              className="project-tile"
              onClick={() =>
                openProject(id)
              }
            >

              <div className="tile-image">
                Image
              </div>

              <div className="tile-title">
                {project.title}
              </div>

            </button>

          )
        )}

      </div>

    </div>
  );
}

export default ProjectTiles;