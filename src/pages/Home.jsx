import { useState } from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import ProjectDirectory from "../components/ProjectDirectory";
import ClubDirectory from "../components/ClubDirectory";
import ProjectTiles from "../components/ProjectTiles";
import ClubTiles from "../components/ClubTiles";

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

  const [
    selectedClubCategory,
    setSelectedClubCategory
  ] = useState(null);

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

        setSelectedCategory={
          setSelectedCategory
        }

        setSelectedClubCategory={
          setSelectedClubCategory
        }
      />

      {/* PROJECT DIRECTORY */}

      {menuOpen &&
        activeDirectory === "projects" && (

        <ProjectDirectory
          setSelectedCategory={
            setSelectedCategory
          }

          setSelectedProject={(project) => {

            setSelectedProject(project);

            setMenuOpen(false);

            setActiveDirectory(null);

            setSelectedCategory(null);

            setSelectedClubCategory(null);

          }}
        />

      )}

      {/* PROJECT TILES */}

      {menuOpen &&
        activeDirectory === "projects" && (

        <ProjectTiles
          setSelectedProject={(project) => {

            setSelectedProject(project);

            setMenuOpen(false);

            setActiveDirectory(null);

            setSelectedCategory(null);

            setSelectedClubCategory(null);

          }}

          setActiveDirectory={
            setActiveDirectory
          }
        />

      )}

      {/* CLUB DIRECTORY */}

      {menuOpen &&
        activeDirectory === "clubs" && (

        <ClubDirectory
          setSelectedClubCategory={
            setSelectedClubCategory
          }

          setSelectedProject={(project) => {

            setSelectedProject(project);

            setMenuOpen(false);

            setActiveDirectory(null);

            setSelectedCategory(null);

            setSelectedClubCategory(null);

          }}
        />

      )}

      {/* CLUB TILES */}

      {menuOpen &&
        activeDirectory === "clubs" && (

        <ClubTiles
          setSelectedProject={(project) => {

            setSelectedProject(project);

            setMenuOpen(false);

            setActiveDirectory(null);

            setSelectedCategory(null);

            setSelectedClubCategory(null);

          }}

          setActiveDirectory={
            setActiveDirectory
          }
        />

      )}

      <RightPanel
        currentView={currentView}
        selectedProject={
          selectedProject
        }
        setSelectedProject={
          setSelectedProject
        }
      />

    </div>
  );
}

export default Home;