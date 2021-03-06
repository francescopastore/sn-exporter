module.exports = {
  /**
   * substract two dates and return milliseconds between them
   * @param {Date} date1
   * @param {Date} date2
   * @return {Number} millisecond between date1 and date2
   */
  substract(date1, date2) {
    return Math.abs(date1 - date2)
  },
  /**
   * Convert milliseconds in minutes
   * @param {Number} milliseconds value to convert
   * @return {Number} minutes
   */
  millisecondsToMinutes(milliseconds) {
    return milliseconds * 60 * 1000
  },
}
