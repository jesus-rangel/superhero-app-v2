/* If a PowerStat is not known, show "Unknown" instead of an empty string */
export const showPowerStat = (powerstat) => {
  if (powerstat === null) {
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
