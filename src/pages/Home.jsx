import { useState } from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import ProjectDirectory from "../components/ProjectDirectory";
import ClubDirectory from "../components/ClubDirectory";

function Home() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [currentView, setCurrentView] =
    useState("about");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [activeDirectory, setActiveDirectory] =
    useState(null);

  return (
    <div className="app-container">

      <LeftPanel
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}

        currentView={currentView}
        setCurrentView={setCurrentView}

        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}

        activeDirectory={activeDirectory}
        setActiveDirectory={setActiveDirectory}
      />

      {menuOpen &&
        activeDirectory === "projects" && (
          <ProjectDirectory
            setSelectedProject={(
              project
            ) => {
              setSelectedProject(project);

              setMenuOpen(false);

              setActiveDirectory(
                null
              );
            }}

            setActiveDirectory={
              setActiveDirectory
            }
          />
      )}

      {menuOpen &&
        activeDirectory === "clubs" && (
          <ClubDirectory
            setSelectedProject={(
              project
            ) => {
              setSelectedProject(project);

              setMenuOpen(false);

              setActiveDirectory(
                null
              );
            }}

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