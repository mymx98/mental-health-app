function pad(val, size) {
  var s = String(val);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
}

export function formattedTimeStamp(
  timeInSeconds = 0,
  { startAtZero = false } = {}
) {
  if (timeInSeconds) {
    const minutes = pad(Math.floor(timeInSeconds / 60), 2);
    const seconds = pad(Math.floor(timeInSeconds % 60), 2);

    return `${minutes}:${seconds}`;
  } else {
    if (startAtZero) {
      return "00:00";
    } else {
      return "--:--";
    }
  }
}
