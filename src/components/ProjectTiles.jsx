import projects from "../data/projects";

function ProjectTiles({
  category,
  setSelectedProject,
  setActiveDirectory
}) {

  const filteredProjects =
    Object.entries(projects).filter(
      ([, project]) =>
        project.category === category
    );

  const openProject = (id) => {
    setSelectedProject(id);
    setActiveDirectory(null);
  };

  return (
    <div className="tiles-panel">

      <h2>{category}</h2>

      <div className="tile-grid">

        {filteredProjects.map(
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