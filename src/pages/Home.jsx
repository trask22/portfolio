import { useState } from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

function Home() {

  const [currentView, setCurrentView] = useState("about");

  return (
    <div className="app-container">

      <LeftPanel
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <RightPanel
        currentView={currentView}
      />

    </div>
  );
}

export default Home;