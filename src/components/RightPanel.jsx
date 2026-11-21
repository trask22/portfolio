function RightPanel({
  currentView,
  selectedProject,
  setSelectedProject
}) {

  if (selectedProject) {

    return (
      <div className="right-panel">

        <button
          className="back-button"
          onClick={() =>
            setSelectedProject(null)
          }
        >
          ← Back to Projects
        </button>

        <h1>
          {selectedProject.toUpperCase()}
        </h1>

        <br />

        <h3>Overview</h3>

        <br />

        <p>
          Placeholder content for
          {selectedProject}
        </p>

        <br />

        <h3>Future Content</h3>

        <ul>

          <li>Hero Image</li>

          <li>Project Summary</li>

          <li>CAD / Media</li>

          <li>Technical Details</li>

          <li>Results</li>

        </ul>

      </div>
    );
  }

  return (
    <div className="right-panel">

      {currentView === "about" && (
        <>
          <h1>About</h1>
          <br />
          <p>This will become the About page.</p>
        </>
      )}

      {currentView === "projects" && (
        <>
          <h1>Projects</h1>
          <br />
          <p>Select a project from the directory.</p>
        </>
      )}

      {currentView === "clubs" && (
        <>
          <h1>UoG Club Work</h1>
          <br />
          <p>UGRT and ESW coming soon.</p>
        </>
      )}

      {currentView === "gallery" && (
        <>
          <h1>Gallery</h1>
          <br />
          <p>Gallery coming soon.</p>
        </>
      )}

    </div>
  );
}

export default RightPanel;