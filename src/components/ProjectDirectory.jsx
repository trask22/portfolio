import { useState } from "react";

function ProjectDirectory({
  setSelectedProject
}) {

  const [openCategory, setOpenCategory] =
    useState("robotics");

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

          <button
            onClick={() =>
              setSelectedProject("robo1")
            }
          >
            Robo Project 1
          </button>

          <button
            onClick={() =>
              setSelectedProject("robo2")
            }
          >
            Robo Project 2
          </button>

          <button
            onClick={() =>
              setSelectedProject("robo3")
            }
          >
            Robo Project 3
          </button>

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

          <button
            onClick={() =>
              setSelectedProject("control1")
            }
          >
            Control Project 1
          </button>

          <button
            onClick={() =>
              setSelectedProject("control2")
            }
          >
            Control Project 2
          </button>

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

          <button
            onClick={() =>
              setSelectedProject("design1")
            }
          >
            Design Project 1
          </button>

          <button
            onClick={() =>
              setSelectedProject("design2")
            }
          >
            Design Project 2
          </button>

        </div>
      )}

    </div>
  );
}

export default ProjectDirectory;