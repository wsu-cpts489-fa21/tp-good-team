/*****************************************************************
 * BadgeData.js
 *
 * Central location to store data required for badges.
 *
 * ***NOTE***
 * Use >= when making comparisons and choosing values for consistency
 *****************************************************************/

const BadgeData = {
  roundsPlayedBadges: {
    purple: 520,
    blue: 260,
    gold: 130,
    grey: 65,
    brown: 30,
  },

  //TODO: Update Badge Data
  fastTimeBadges: {
    purple: 35,
    blue: 45,
    gold: 50,
    grey: 60,
    brown: 80,
  },
  //TODO: Update Badge Data
  lowStrokesBadges: {
    purple: 65,
    blue: 75,
    gold: 90,
    grey: 120,
    brown: 150,
  },
  streakBadges: {
    purple: 15,
    blue: 10,
    gold: 7,
    grey: 3,
    brown: 1,
  },
  highScoreBadges: {
    purple: 105,
    blue: 115,
    gold: 125,
    grey: 130,
    brown: 135,
  },
};

Object.freeze(BadgeData);

export default BadgeData;
