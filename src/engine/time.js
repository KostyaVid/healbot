export var MAX_TIME_STAMP = 6000;

var timeM = new Array(MAX_TIME_STAMP).fill(undefined);
var currentTimeStamp = 0;
var currentMoment;

setInterval(() => {
  currentMoment = timeM[currentTimeStamp];
  currentTimeStamp === MAX_TIME_STAMP ? 0 : currentTimeStamp + 1;
}, 1);

export default timeM;
