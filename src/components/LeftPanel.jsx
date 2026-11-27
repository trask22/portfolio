function LeftPanel({
  menuOpen,
  setMenuOpen,

  currentView,
  setCurrentView,

  setSelectedProject,

  activeDirectory,
  setActiveDirectory,

  setSelectedCategory,
  setSelectedClubCategory
}) {

  const navigateTo = (view) => {
    setSelectedProject(null);
    setActiveDirectory(null);

    setSelectedCategory(null);
    setSelectedClubCategory(null);

    setCurrentView(view);

    setMenuOpen(false);
  };

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => {

          if (menuOpen) {

            setMenuOpen(false);

            setActiveDirectory(null);

            setSelectedCategory(null);

            setSelectedClubCategory(null);

          } else {

            setMenuOpen(true);

          }

        }}
      >
        AT
      </button>

      {menuOpen && (

        <div className="navigation-overlay">

          <div className="overlay-panel">

            <div className="overlay-header">

              <div className="overlay-headshot">
                Headshot
              </div>

              <div className="overlay-info">

                <h1>Aidan Trask</h1>

                <p>
                  Mechanical Engineering Student
                </p>

                <p>
                  University of Guelph
                </p>

              </div>

            </div>

            <div className="overlay-nav">

              <button
                onClick={() =>
                  navigateTo("about")
                }
              >
                About / Hero
              </button>

              <button
                onClick={() => {

                  setActiveDirectory(
                    "projects"
                  );

                  setSelectedCategory(
                    "Robotics"
                  );

                }}
              >
                Projects →
              </button>

              <button
                onClick={() => {

                  setActiveDirectory(
                    "clubs"
                  );

                  setSelectedClubCategory(
                    "UGRT"
                  );

                }}
              >
                UoG Club Work →
              </button>

              <button
                onClick={() =>
                  navigateTo("gallery")
                }
              >
                Gallery
              </button>

            </div>

            <div className="overlay-links">

              <a href="#">
                Resume
              </a>

              <a href="#">
                LinkedIn
              </a>

              <a href="#">
                GitHub
              </a>

              <a href="#">
                GrabCAD
              </a>

            </div>

          </div>

        </div>

      )}
    </>
  );
}

export default LeftPanel;