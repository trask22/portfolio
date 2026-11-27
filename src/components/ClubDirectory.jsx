import clubs from "../data/clubs";

function ClubDirectory({
  setSelectedClubCategory,
  setSelectedProject
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

      <h2>Club Work</h2>

      <div className="directory-section">

        <button
          className="tile-category"
          onClick={() => {
            setSelectedClubCategory(
              "UGRT"
            );

            scrollToSection(
              "ugrt-section"
            );
          }}
        >
          ▼ UGRT
        </button>

        <div className="directory-projects">

          {uogProjects.map(
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
            setSelectedClubCategory(
              "ESW"
            );

            scrollToSection(
              "esw-section"
            );
          }}
        >
          ▼ ESW
        </button>

        <div className="directory-projects">

          {eswProjects.map(
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

export default ClubDirectory;