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
    purple: 35,
    blue: 30,
    gold: 25,
    grey: 21,
    brown: 17,
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
  //TODO: Update Badge Data
  highScoreBadges: {
    purple: 0,
    blue: 0,
    gold: 0,
    grey: 0,
    brown: 0,
  },
};

Object.freeze(BadgeData);

export default BadgeData;
