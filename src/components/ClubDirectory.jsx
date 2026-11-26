import clubs from "../data/clubs";

function ClubDirectory({
  setSelectedProject,
  setActiveDirectory
}) {

  const uogProjects =
    Object.entries(clubs).filter(
      ([, project]) =>
        project.category === "UGRT"
    );

  const eswProjects =
    Object.entries(clubs).filter(
      ([, project]) =>
        project.category === "ESW"
    );

  const openProject = (id) => {
    setSelectedProject(id);
    setActiveDirectory(null);
  };

  return (
    <div className="directory-panel">

      <h2>Club Work</h2>

      <div className="directory-section">

        <div className="tile-category">
          UGRT
        </div>

        {uogProjects.map(
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
          ESW
        </div>

        {eswProjects.map(
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

export default ClubDirectory;