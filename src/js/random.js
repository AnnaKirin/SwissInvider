export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(4);
}
