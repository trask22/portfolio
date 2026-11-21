function ProjectPage({

  title,
  category,
  year,
  status,

  overview,
  technical,
  results,
  lessons,

  setSelectedProject

}) {

  return (

    <div>

      <button
        className="back-button"
        onClick={() =>
          setSelectedProject(null)
        }
      >
        ← Close Project
      </button>

      <h1>{title}</h1>

      <br />

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>

      <br />

      <section>

        <h2>Overview</h2>

        <br />

        <p>{overview}</p>

      </section>

      <br />

      <section>

        <h2>Media</h2>

        <br />

        <div className="placeholder-box">
          Future Images / Videos
        </div>

      </section>

      <br />

      <section>

        <h2>Technical Details</h2>

        <br />

        <p>{technical}</p>

      </section>

      <br />

      <section>

        <h2>Results</h2>

        <br />

        <p>{results}</p>

      </section>

      <br />

      <section>

        <h2>Lessons Learned</h2>

        <br />

        <p>{lessons}</p>

      </section>

    </div>

  );
}

export default ProjectPage;