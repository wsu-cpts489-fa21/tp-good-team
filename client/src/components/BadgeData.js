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
  fastTimeBadges: {
    purple: 0,
    blue: 0,
    gold: 0,
    grey: 0,
    brown: 0,
  },
  lowStrokesBadges: {
    purple: 0,
    blue: 0,
    gold: 0,
    grey: 0,
    brown: 0,
  },
  streakBadges: {
    purple: 0,
    blue: 0,
    gold: 0,
    grey: 0,
    brown: 0,
  },
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
