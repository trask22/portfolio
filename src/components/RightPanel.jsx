import ProjectPage from "./ProjectPage";

import projects from "../data/projects";
import clubs from "../data/clubs";

function RightPanel({
  currentView,
  selectedProject,
  setSelectedProject
}) {

  if (selectedProject) {

    const project =
      projects[selectedProject] ||
      clubs[selectedProject];

    return (

      <div className="right-panel">

        <ProjectPage

          title={project.title}

          category={project.category}

          year={project.year}

          status={project.status}

          overview={project.overview}

          technical={project.technical}

          results={project.results}

          lessons={project.lessons}

          setSelectedProject={
            setSelectedProject
          }

        />

      </div>

    );
  }

  return (

    <div className="right-panel">

      {currentView === "about" && (
        <>
          <h1>About</h1>

          <br />

          <p>
            This will become the About page.
          </p>
        </>
      )}

      {currentView === "projects" && (
        <>
          <h1>Projects</h1>

          <br />

          <p>
            Select a project from the directory.
          </p>
        </>
      )}

      {currentView === "clubs" && (
        <>
          <h1>UoG Club Work</h1>

          <br />

          <p>
            Select a project from the directory.
          </p>
        </>
      )}

      {currentView === "gallery" && (
        <>
          <h1>Gallery</h1>

          <br />

          <p>
            Gallery coming soon.
          </p>
        </>
      )}

    </div>

  );
}

export default RightPanel;