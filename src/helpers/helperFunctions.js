/* If a PowerStat is not known, show "Unknown" instead of an empty string or the null value */
export const showPowerStat = (powerstat) => {
  if (powerstat === null || powerstat === "null") {
    return "Unknown";
  }

  return powerstat;
};

/* Sum of each powerstat for the team (intelligence, strength, etc) */
export const powerStatSum = (heroes, powerstat) => {
  return heroes.reduce((teamPowerstat, hero) => {
    return teamPowerstat + parseInt(hero.powerstats[powerstat], 10);
  }, 0);
};

/* Change color of text acording to character's alignment */
export const alignmentColor = (alignment) => {
  if (alignment === "good") {
    return "text-success";
  } else if (alignment === "bad") {
    return "text-danger";
  } else {
    return "text-info";
  }
};
