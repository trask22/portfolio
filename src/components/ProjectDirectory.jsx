import { useState } from "react";
import projects from "../data/projects";

function ProjectDirectory({
  setSelectedProject,
  setActiveDirectory
}) {

  const [openCategory, setOpenCategory] =
    useState("robotics");

  const openProject = (id) => {

    setSelectedProject(id);

    setActiveDirectory(null);

  };

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

  return (
    <div className="directory-panel">

      <h2>Projects</h2>

      <button
        className="directory-category"
        onClick={() =>
          setOpenCategory("robotics")
        }
      >
        ▼ Robotics
      </button>

      {openCategory === "robotics" && (
        <div className="directory-projects">

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
      )}

      <button
        className="directory-category"
        onClick={() =>
          setOpenCategory("controls")
        }
      >
        ▼ Controls
      </button>

      {openCategory === "controls" && (
        <div className="directory-projects">

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
      )}

      <button
        className="directory-category"
        onClick={() =>
          setOpenCategory("design")
        }
      >
        ▼ Design
      </button>

      {openCategory === "design" && (
        <div className="directory-projects">

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
      )}

    </div>
  );
}

export default ProjectDirectory;