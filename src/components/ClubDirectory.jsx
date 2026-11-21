import { useState } from "react";
import clubs from "../data/clubs";

function ClubDirectory({
  setSelectedProject,
  setActiveDirectory
}) {

  const [openCategory, setOpenCategory] =
    useState("ugrt");

  const openProject = (id) => {

    setSelectedProject(id);

    setActiveDirectory(null);

  };

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

  return (

    <div className="directory-panel">

      <h2>Club Work</h2>

      <button
        className="directory-category"
        onClick={() =>
          setOpenCategory("ugrt")
        }
      >
        ▼ UGRT
      </button>

      {openCategory === "ugrt" && (

        <div className="directory-projects">

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

      )}

      <button
        className="directory-category"
        onClick={() =>
          setOpenCategory("esw")
        }
      >
        ▼ ESW
      </button>

      {openCategory === "esw" && (

        <div className="directory-projects">

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

      )}

    </div>

  );
}

export default ClubDirectory;