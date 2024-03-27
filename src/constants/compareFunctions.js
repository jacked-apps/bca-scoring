// ------------------------------
// TABLE OF CONTENTS
// ------------------------------
// 1. Utility Functions
//    - getCumulativeStats
// 2. Compare Functions
//    - compareNames
//    - compareStats
//    - compareSeasons
//    - compareTeams

//------------------------
// IMPORTS
//------------------------

//------------------------
// Utility Functions
//------------------------

/**
 * Gets the cumulative stats for the past 3 seasons for a player
 * @param {Object} pastPlayer - The past player object
 * @returns {Object} - Cumulative stats object
 */

export const getCumulativeStats = (pastPlayer) => {
  // Sort the stats descending order
  const sortedDates = Object.keys(pastPlayer.stats).sort((a, b) =>
    b.localeCompare(a)
  );
  // Select 3 newest season stats
  const newestRecords = sortedDates.slice(0, 3);

  let totalWins = 0;
  let totalLosses = 0;
  // Map thru the newest records and sum the wins and the losses
  newestRecords.forEach((date) => {
    const pastStats = pastPlayer.stats[date];
    totalWins = totalWins + Number(pastStats.wins);
    totalLosses = totalLosses + Number(pastStats.losses);
  });
  return { wins: totalWins, losses: totalLosses };
};

//------------------------
// Compare functions
//------------------------

/**
 * Compares names between past and current player
 * @param {Object} pastPlayer - Past player object
 * @param {Object} currentUser - Current user object
 * @returns {Object} - Consistency check results
 */

export const compareNames = (pastPlayer, currentUser) => {
  let isConsistent = true;
  let errors = [];
  if (pastPlayer.firstName !== currentUser.firstName) {
    isConsistent = false;
    errors.push('firstName');
  }
  if (pastPlayer.lastName !== currentUser.lastName) {
    isConsistent = false;
    errors.push('lastName');
  }
  if (pastPlayer.nickname !== currentUser.nickname) {
    isConsistent = false;
    errors.push('nickname');
  }
  return { isConsistent, errors };
};

/**
 * Compares stats between past and current player
 * @param {Object} pastPlayer - Past player object
 * @param {Object} currentUser - Current user object
 * @returns {Object} - Consistency check results
 */

export const compareStats = (pastPlayer, currentUser) => {
  let isConsistent = true;
  let errors = [];
  // Get pastPlayer cumulative stats
  const pastCumulativeStats = getCumulativeStats(pastPlayer);
  // Get currentUser cumulative stats
  const currentUserStats = currentUser.stats;
  console.log('compare functions current user stats', currentUserStats);
  //   if (pastCumulativeStats.wins !== currentUserStats.wins) {
  //     isConsistent = false;
  //     errors.push('Wins');
  //   }
  //   if (pastCumulativeStats.losses !== currentUserStats.losses) {
  //     isConsistent = false;
  //     errors.push('Losses');
  //   }
  return { isConsistent, errors };
};

/**
 * Compares seasons played between past and current player
 * @param {Object} pastPlayer - Past player object
 * @param {Object} currentUser - Current user object
 * @returns {Object} - Consistency check results
 */
// Utility Functions

export const compareSeasons = (pastPlayer, currentUser) => {
  // Get pastPlayer seasons
  const pastSeasons = pastPlayer.seasons || [];
  // Get currentUser seasons
  const currentSeasons = currentUser.seasons || [];
  console.log(
    'compare functions current user seasons',
    currentSeasons,
    pastSeasons
  );
  // Ensure each season in currentSeasons is in pastSeasons
  const isConsistent = currentSeasons.every((item) =>
    pastSeasons.includes(item)
  );
  // Get the seasons that are not in pastSeasons
  const errors = currentSeasons.filter((item) => !pastSeasons.includes(item));

  return { isConsistent, errors };
};

/**
 * Compares teams played for between past and current player
 * @param {Object} pastPlayer - Past player object
 * @param {Object} currentUser - Current user object
 * @returns {Object} - Consistency check results
 */
export const compareTeams = (pastPlayer, currentUser) => {
  // Get pastPlayer teams
  const pastTeams = pastPlayer.teams || [];
  // Get currentUser teams
  const currentTeams = currentUser.teams || [];
  // ensure each team in currentTeams is in pastTeams
  const isConsistent = currentTeams.every((item) => pastTeams.includes(item));
  // get the teams that are not in pastTeams
  const errors = currentTeams.filter((item) => !pastTeams.includes(item));

  return { isConsistent, errors };
};

/**
 * Compares full player objects between past and current player
 * @param {Object} pastPlayer - Past player object
 * @param {Object} currentUser - Current user object
 * @returns {Object} - Consistency check results
 */

export const comparePlayers = (pastPlayer, currentUser) => {
  let isConsistent = true;
  const errors = [];

  const nameCheck = compareNames(pastPlayer, currentUser);
  if (!nameCheck.isConsistent) {
    isConsistent = false;
    errors.push(...nameCheck.errors);
  }

  const statsCheck = compareStats(pastPlayer, currentUser);
  if (!statsCheck.isConsistent) {
    isConsistent = false;
    errors.push(...statsCheck.errors);
  }

  const seasonsCheck = compareSeasons(pastPlayer, currentUser);
  if (!seasonsCheck.isConsistent) {
    isConsistent = false;
    errors.push(...seasonsCheck.errors);
  }

  const teamsCheck = compareTeams(pastPlayer, currentUser);
  if (!teamsCheck.isConsistent) {
    isConsistent = false;
    errors.push(...teamsCheck.errors);
  }

  return {
    isConsistent,
    errors,
  };
};
