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
    brown: 30,
    grey: 65,
    gold: 130,
    blue: 260,
    purple: 520,
  },
  fastTimeBadges: {
    brown: 0,
    grey: 0,
    gold: 0,
    blue: 0,
    purple: 0,
  },
  lowStrokesBadges: {
    brown: 0,
    grey: 0,
    gold: 0,
    blue: 0,
    purple: 0,
  },
  streakBadges: {
    brown: 0,
    grey: 0,
    gold: 0,
    blue: 0,
    purple: 0,
  },
  highScoreBadges: {
    brown: 0,
    grey: 0,
    gold: 0,
    blue: 0,
    purple: 0,
  },
};

Object.freeze(BadgeData);

export default BadgeData;
