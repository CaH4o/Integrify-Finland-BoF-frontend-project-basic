import { width } from "@mui/system";
import React from "react";

function Home() {
  return (
    <div>
      <p>
        There is a whole world in our life. Don't stop at one country, click on
        "countries" to look at and then choose!
      </p>
      <img
        src="https://www.nationsonline.org/gallery/World/World-Flag-map-Nell-L.jpg"
        alt="world pic"
        style={{ objectFit: "scale-down", width: "100%" }}
      />
    </div>
  );
}

export default Home;
