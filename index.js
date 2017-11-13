class MonoTime {
  /**
   * @class Monotime
   * @param  {string} interval - hourly, bi-weekly, monthly, yearly (the time income is collected)
   * @param  {number} amount   - the number value that shows the amount of money earned
   */
  constructor(interval, amount) {
    this.total = 0;

    switch (interval) {
      case 'hourly':
        this.total = amount * 2080;
        break;
      case 'bi-weekly':
        this.total = amount * 26;
        break;
      case 'monthly':
        this.total = amount * 12;
        break;
      case 'yearly':
        this.total = amount;
        break;
      default:
        throw new Error('interval not supported');
    }
  }
  /**
   * This function will return how much time the value in dollars passed in will cost you in terms of time normalized to hours
   * @function purchase
   * @memberof Monotime
   * @param {number} costInDollars - the value in dollars the item is
   */
  purchase(costInDollars) {
    const hourly = this.total / 2080;

    return costInDollars / hourly;
  }
}

module.exports = function(interval, amount) {
  return new MonoTime(interval, amount);
};
