// This is how a bundler behaves ...

// 1. original TypeScript ...

import { assert } from 'chai';

// 2. TypeScript turns it this (es5 in this case)

var assert = require('chai').assert;

// 3. Paeckchen or Webpack or whatever bundler then extracts
// all the needed code, combines and outputs it ...

var assert = (function () {
	// stuff happens
}());
