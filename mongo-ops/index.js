module.exports = {
  getHoursForCurrentDate () {
    // do some stuff
  },

  getHoursForCurrentWeek () {
    // do some stuff
  },

  getHoursForSkillAndDay (skill, day = new Date().toISOString().substring(0, 10)) {
    return day;
  },

  getHoursForSkillAndDay (skill, day = new Date().getDay()) {
    return day;
  }
}