export const formatTimeToHMS = (time) => {
  const second = Math.floor(time % 60);
  const minute = Math.floor(time / 60) % 60;
  const hour = Math.floor(time / (60 * 60));

  if (hour === 0) return `${minute}:${twoDigitTimeFormatter.format(second)}`;
  return `${hour}:${twoDigitTimeFormatter.format(
    minute
  )}:${twoDigitTimeFormatter.format(second)}`;
};

// 1:3 秒變成 1:03
export const twoDigitTimeFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});
