import React from "react"

import { createRoot } from "react-dom/client"

const App = () => <div>redux</div>

const root = createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)