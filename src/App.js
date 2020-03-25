import React from "react";

import Curve from "./components/Curve";

function App() {
  var polygons = [];
  polygons.push({ x: 90, y: 0 });
  polygons.push({ x: 210, y: 50 });
  polygons.push({ x: 100, y: 90 });
  polygons.push({ x: 150, y: 100 });
  polygons.push({ x: 120, y: 120 });
  polygons.push({ x: 30, y: 130 });
  polygons.push({ x: 500, y: 150 });
  polygons.push({ x: 300, y: 200 });
  polygons.push({ x: 155, y: 220 });
  polygons.push({ x: 189, y: 250 });
  polygons.push({ x: 50, y: 300 });
  polygons.push({ x: 250, y: 350 });
  polygons.push({ x: 150, y: 400 });
  polygons.push({ x: 560, y: 500 });

  return (
    <div>
      <Curve points={polygons} />
    </div>
  );
}

export default App;
