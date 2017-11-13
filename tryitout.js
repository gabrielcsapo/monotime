module.exports = {
  title: "monotime",
  description: "💰 Money is time, a library to figure out what your time costs.",
  nav: {
    Source: "https://github.com/gabrielcsapo/monotime",
    Docs: "./code/index.html"
  },
  body: [{
    type: "text",
    value: "> [`monotime`](https://github.com/gabrielcsapo/monotime) is an easy way to compute the amount of time a dollar amount will cost based on the normalized wage provided."
  }, {
    type: "code",
    title: "Hourly Time Conversation",
    subtitle: "This will take an hourly wage and convert it into an object that you can query with a dollar amount to purchase cost in hours",
    value: `
        var monotime = require('monotime');

        console.log(\`
          buying this item will cost you
          \${monotime('hourly', 27.692307692307693).purchase('15')}
          hours of your life.
        \`);
      `
  }, {
    type: "text",
    value: "> `monotime` works with the following range of salary intervals; `hourly, bi-weekly, monthly, monthly, yearly`"
  }, {
    type: "code",
    title: "Example Time Conversation",
    subtitle: "This will take an time based wage and convert it into an object that you can query with a dollar amount to purchase cost in hours",
    value: `
        var monotime = require('monotime');

        console.log(monotime('hourly', 27.692307692307693).purchase('15'));
        console.log(monotime('bi-weekly', 2215.3846153846152).purchase('15'));
        console.log(monotime('monthly', 4800).purchase('15'));
        console.log(monotime('yearly', 57600).purchase('15'));
      `
  }],
  output: "./docs",
  externals: [
    "./dist/monotime.min.js"
  ]
};
