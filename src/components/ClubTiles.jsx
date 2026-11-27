import clubs from "../data/clubs";

function ClubTiles({
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
    <div className="tiles-panel">

      <h2 id="ugrt-section">
        UGRT
      </h2>

      <div className="tile-grid">

        {uogProjects.map(
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
        id="esw-section"
        style={{
          marginTop: "2rem"
        }}
      >
        ESW
      </h2>

      <div className="tile-grid">

        {eswProjects.map(
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

export default ClubTiles;