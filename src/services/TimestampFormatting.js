function pad(val, size) {
  var s = String(val);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
}

export function formattedTimeStamp(timeInSeconds = 0) {
  if (timeInSeconds) {
    const minutes = pad(Math.floor(timeInSeconds / 60), 2);
    const seconds = pad(Math.floor(timeInSeconds % 60), 2);

    return `${minutes}:${seconds}`;
  } else {
    return "--:--";
  }
}
