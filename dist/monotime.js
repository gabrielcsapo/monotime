require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"monotime":[function(require,module,exports){
"use strict";

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
};

},{}]},{},[]);
