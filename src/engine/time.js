export var MAX_TIME_STAMP = 6000;
export var TIME_TICK = 10;

var timeM = new Array(MAX_TIME_STAMP).fill([]);
var currentTimeStamp = 0;
var currentMoment;

export function exec(delay, callback) {
  timeM[currentTimeStamp + delay * TIME_TICK].push(callback);
}

function execAllWorks() {
  currentMoment.forEach((callback) => callback());
}

setInterval(() => {
  ++currentTimeStamp;

  if (currentTimeStamp > MAX_TIME_STAMP) {
    currentTimeStamp = 0;
  }

  currentMoment = timeM[currentTimeStamp];

  execAllWorks();

  timeM[currentTimeStamp] = [];
}, 10);

export default timeM;
