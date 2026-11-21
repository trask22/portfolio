import { useState } from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import ProjectDirectory from "../components/ProjectDirectory";
import ClubDirectory from "../components/ClubDirectory";

function Home() {

  const [currentView, setCurrentView] =
    useState("about");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [activeDirectory, setActiveDirectory] =
    useState(null);

  return (

    <div className="app-container">

      <LeftPanel

        currentView={currentView}
        setCurrentView={setCurrentView}

        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}

        activeDirectory={activeDirectory}
        setActiveDirectory={setActiveDirectory}

      />

      {activeDirectory === "projects" && (

        <ProjectDirectory

          setSelectedProject={
            setSelectedProject
          }

          setActiveDirectory={
            setActiveDirectory
          }

        />

      )}

      {activeDirectory === "clubs" && (

        <ClubDirectory

          setSelectedProject={
            setSelectedProject
          }

          setActiveDirectory={
            setActiveDirectory
          }

        />

      )}

      <RightPanel

        currentView={currentView}

        selectedProject={selectedProject}

        setSelectedProject={
          setSelectedProject
        }

      />

    </div>

  );
}

export default Home;