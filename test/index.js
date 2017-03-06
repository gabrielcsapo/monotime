const test = require('tape');
const monotime = require('../');

test('monotime', (t) => {
    t.plan(6);

    t.test('should throw error, not supported interval', (t) => {
        try {
            monotime('whatwhat', 17)
        } catch(ex) {
            t.equal('Error: interval not supported', ex.toString());
        }
        t.end();
    });

    t.test('should return monotime object', (t) => {
        t.equal(typeof monotime('monthly', 4800), 'object');
        t.end();
    });

    t.test('should return amount in hours (hourly)', (t) => {
        t.equal(monotime('hourly', 27.692307692307693).get('15'), 0.5416666666666666);
        t.end();
    });

    t.test('should return amount in hours (bi-weekly)', (t) => {
        t.equal(monotime('bi-weekly', 2215.3846153846152).get('15'), 0.5416666666666666);
        t.end();
    });

    t.test('should return amount in hours (monthly)', (t) => {
        t.equal(monotime('monthly', 4800).get('15'), 0.5416666666666666);
        t.end();
    });

    t.test('should return amount in hours (yearly)', (t) => {
        t.equal(monotime('yearly', 57600).get('15'), 0.5416666666666666);
        t.end();
    });

    t.end();
});
