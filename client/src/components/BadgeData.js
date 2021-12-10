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
    purple: 0,
    blue: 0,
    gold: 0,
    grey: 0,
    brown: 0,
  },
  //TODO: Update Badge Data
  lowStrokesBadges: {
    purple: 0,
    blue: 0,
    gold: 0,
    grey: 0,
    brown: 0,
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
