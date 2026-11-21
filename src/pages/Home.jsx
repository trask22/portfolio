import { useState } from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import ProjectDirectory from "../components/ProjectDirectory";

function Home() {

  const [currentView, setCurrentView] =
    useState("about");

  const [selectedProject, setSelectedProject] =
    useState(null);

  return (
    <div className="app-container">

      <LeftPanel
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {currentView === "projects" &&
        selectedProject === null && (
          <ProjectDirectory
            setSelectedProject={
              setSelectedProject
            }
          />
      )}

      <RightPanel
        currentView={currentView}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

    </div>
  );
}

export default Home;