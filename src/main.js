import "./style.css";

import { exec, start } from "./engine/time";

document.querySelector("#app").innerHTML = `
  <div>
  Healbot
  </div>
`;

start();
exec(1000, () => console.log("Game"));
exec(2000, () => console.log("Game"));
