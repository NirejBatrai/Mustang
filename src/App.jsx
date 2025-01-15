import React, { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`app ${theme}`}>
      {" "}
      {/* Add class based on theme */}
      <Navbar theme={theme} setTheme={setTheme} />
      {/* Other components */}
    </div>
  );
}

export default App;
