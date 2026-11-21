function LeftPanel({

  currentView,
  setCurrentView,

  setSelectedProject,

  activeDirectory,
  setActiveDirectory

}) {

  const goToPage = (view) => {

    setSelectedProject(null);

    setActiveDirectory(null);

    setCurrentView(view);

  };

  const openProjects = () => {

    setActiveDirectory("projects");

  };

  const openClubs = () => {

    setActiveDirectory("clubs");

  };

  return (

    <div className="left-panel">

      <div className="profile-circle">
        Headshot
      </div>

      <div className="identity-row">

        <div className="identity-left">

          <h1>Aidan Trask</h1>

          <p className="subtitle">
            Mechanical Eng. Student
            <br />
            University of Guelph
          </p>

        </div>

        <div className="identity-divider"></div>

        <div className="identity-right">

          <span>Robotics</span>
          <span>Controls</span>
          <span>Design</span>

        </div>

      </div>

      <div className="nav-buttons">

        <button
          onClick={() =>
            goToPage("about")
          }
        >
          <span>About / Hero</span>

          {currentView === "about" &&
            <span>▶</span>}
        </button>

        <button
          onClick={openProjects}
        >
          <span>Projects</span>

          {activeDirectory === "projects" &&
            <span>▶</span>}
        </button>

        <button
          onClick={openClubs}
        >
          <span>UoG Club Work</span>

          {activeDirectory === "clubs" &&
            <span>▶</span>}
        </button>

        <button
          onClick={() =>
            goToPage("gallery")
          }
        >
          <span>Gallery</span>

          {currentView === "gallery" &&
            <span>▶</span>}
        </button>

      </div>

      <div className="social-links">

        <a href="#">Resume</a>

        <a href="#">LinkedIn</a>

        <a href="#">GitHub</a>

        <a href="#">GrabCAD</a>

      </div>

    </div>

  );
}

export default LeftPanel;