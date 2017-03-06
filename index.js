/**
 * @constructor Monotime
 * @param  {string} interval - hourly, bi-weekly, monthly, yearly (the time income is collected)
 * @param  {number} amount   - the number value that shows the amount of money earned
 * @return {object}          - the monotime object
 */
module.exports = (interval, amount) => {
    let self = {
        total: 0
    };
    switch (interval) {
        case 'hourly':
            self.total = amount * 2080;
            break;
        case 'bi-weekly':
            self.total = amount * 26;
            break;
        case 'monthly':
            self.total = amount * 12;
            break;
        case 'yearly':
            self.total = amount;
            break;
        default:
            throw new Error('interval not supported');
    }
    /**
     * @memberof Monotime
     * @function get
     * @param {number} value - the value of the thing being compared to time
     */
    self.get = (value) => {
        const hourly = self.total / 2080;
        return value / hourly;
    };
    return self;
}
