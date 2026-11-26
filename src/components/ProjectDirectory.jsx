function ProjectDirectory({
  setSelectedCategory
}) {
  return (
    <div className="category-panel">

      <h2>Projects</h2>

      <div className="directory-section">

        <button
          className="tile-category"
          onClick={() =>
            setSelectedCategory(
              "Robotics"
            )
          }
        >
          Robotics
        </button>

        <button
          className="tile-category"
          onClick={() =>
            setSelectedCategory(
              "Controls"
            )
          }
        >
          Controls
        </button>

        <button
          className="tile-category"
          onClick={() =>
            setSelectedCategory(
              "Design"
            )
          }
        >
          Design
        </button>

      </div>

    </div>
  );
}

export default ProjectDirectory;