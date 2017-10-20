# monotime

> 💰 Money is time, a library to figure out what your time costs

[![Npm Version](https://img.shields.io/npm/v/monotime.svg)](https://www.npmjs.com/package/monotime)
[![Coverage Status](https://lcov-server.gabrielcsapo.com/badge/github%2Ecom/gabrielcsapo/monotime.svg)](https://lcov-server.gabrielcsapo.com/coverage/github%2Ecom/gabrielcsapo/monotime)
[![Dependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/monotime/status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/monotime)
[![devDependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/monotime/dev-status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/monotime#info=devDependencies)
[![Build Status](https://travis-ci.org/gabrielcsapo/monotime.svg?branch=master)](https://travis-ci.org/gabrielcsapo/monotime)
![npm](https://img.shields.io/npm/dt/monotime.svg)
![npm](https://img.shields.io/npm/dm/monotime.svg)

<pre align="center">
  <img src="./docs/Monotime.png"/>
</pre>

# Installation

```
npm install monotime
```

## Example

```javascript
const monotime = require('monotime');

monotime('hourly', 27.692307692307693).get('15'); // $15 will cost you 0.5416666666666666 hours
```

## Usage

To use `monotime` as a standalone library without a bundler, use the bundle located at `dist/monotime.js`. Else if you are using webpack or any other bundler, simply `require('monotime')` will suffice!
