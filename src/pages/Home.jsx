import { useState } from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import ProjectDirectory from "../components/ProjectDirectory";
import ClubDirectory from "../components/ClubDirectory";
import ProjectTiles from "../components/ProjectTiles";

function Home() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [currentView, setCurrentView] =
    useState("about");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [activeDirectory, setActiveDirectory] =
    useState(null);

  const [selectedCategory, setSelectedCategory] =
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

      {/* PROJECT CATEGORY PANEL */}

      {menuOpen &&
        activeDirectory === "projects" && (
          <ProjectDirectory
            setSelectedCategory={
              setSelectedCategory
            }
          />
      )}

      {/* PROJECT TILE PANEL */}

      {menuOpen &&
        selectedCategory && (
          <ProjectTiles
            category={selectedCategory}
            setSelectedProject={(project) => {
              setSelectedProject(project);
              setMenuOpen(false);
              setActiveDirectory(null);
              setSelectedCategory(null);
            }}
            setActiveDirectory={
              setActiveDirectory
            }
          />
      )}

      {/* CLUB PANEL */}

      {menuOpen &&
        activeDirectory === "clubs" && (
          <ClubDirectory
            setSelectedProject={(project) => {
              setSelectedProject(project);
              setMenuOpen(false);
              setActiveDirectory(null);
              setSelectedCategory(null);
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