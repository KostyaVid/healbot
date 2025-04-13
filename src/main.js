import "./style.css";

import { exec, start } from "./engine/time";
import { Unit } from "./engine/unit";

document.querySelector("#app").innerHTML = `
  <div>
  Healbot
  </div>
`;

var tank = new Unit({ name: "tank", health: 200, armor: 40 });

start();
exec(1000, () => tank.takeDamage(100));
exec(2000, () => tank.takeDamage(100));
exec(3000, () => tank.takeDamage(100));
exec(4000, () => tank.takeDamage(100));
