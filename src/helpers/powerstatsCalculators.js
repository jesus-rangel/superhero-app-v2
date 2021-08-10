export const calculateTeamIntelligence = (heroes) => {
  const result = heroes.reduce((teamIntelligence, hero) => {
    return teamIntelligence + parseInt(hero.powerstats.intelligence, 10);
  }, 0);

  console.log("heroes", heroes);
  return result;
};
