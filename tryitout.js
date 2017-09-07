module.exports = {
    title: "monotime",
    description: "💰 Money is time, a library to figure out what your time costs.",
    source: "https://github.com/gabrielcsapo/monotime",
    docs: "./code/index.html",
    output: "./docs",
    body: [{
      type: "text",
      value: "> [`monotime`](https://github.com/gabrielcsapo/monotime) is an easy way to compute the amount of time a dollar amount will cost based on the normalized wage provided."
    },{
      type: "code",
      title: "Hourly Time Conversation",
      subtitle: "This will take an hourly wage and convert it into an object that you can query with a dollar amount to get cost in hours",
      value: `
        var monotime = require('monotime');
        monotime('hourly', 27.692307692307693).get('15'); // this will return how much time $15 dollars will cost you in terms hours
      `
    },{
      type: "text",
      value: "> `monotime` works with the following range of salary intervals; `hourly, bi-weekly, monthly, monthly, yearly`"
    }, {
      type: "code",
      title: "Example Time Conversation",
      subtitle: "This will take an time based wage and convert it into an object that you can query with a dollar amount to get cost in hours",
      value: `
        var monotime = require('monotime');
        console.log(monotime('hourly', 27.692307692307693).get('15'));
        console.log(monotime('bi-weekly', 2215.3846153846152).get('15'));
        console.log(monotime('monthly', 4800).get('15'));
        console.log(monotime('yearly', 57600).get('15'));
      `
    }],
    externals: [
      "./dist/monotime.js"
    ]
}
