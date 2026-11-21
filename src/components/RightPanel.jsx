function RightPanel({ currentView }) {

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
            Project directory coming soon.
          </p>
        </>
      )}

      {currentView === "clubs" && (
        <>
          <h1>UoG Club Work</h1>

          <br />

          <p>
            UGRT and ESW pages coming soon.
          </p>
        </>
      )}

      {currentView === "gallery" && (
        <>
          <h1>Gallery</h1>

          <br />

          <p>
            Media gallery coming soon.
          </p>
        </>
      )}

    </div>
  );
}

export default RightPanel;