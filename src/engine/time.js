export var MAX_TIME_STAMP = 6000;
export var TIME_TICK = 10;

var pause = true;
var timeM = new Array(MAX_TIME_STAMP).fill(undefined).map(() => []);
var currentTimeStamp = 0;
var currentMoment = [];

export function start() {
  pause = false;
}

export function stop() {
  pause = true;
}

export function exec(delay, callback) {
  if (delay >= MAX_TIME_STAMP * TIME_TICK) {
    throw Error("Delay is too long");
  }

  var innerDelay = currentTimeStamp + Math.ceil(delay / TIME_TICK);

  if (innerDelay >= MAX_TIME_STAMP) {
    innerDelay -= MAX_TIME_STAMP;
  }

  timeM[innerDelay].push(callback);
}

setInterval(() => {
  if (pause) {
    return;
  }

  ++currentTimeStamp;

  if (currentTimeStamp === MAX_TIME_STAMP) {
    currentTimeStamp = 0;
  }

  currentMoment = timeM[currentTimeStamp];

  execAllWorks();

  currentMoment = [];

  timeM[currentTimeStamp] = [];
}, TIME_TICK);

function execAllWorks() {
  currentMoment.forEach((callback) => callback());
}
