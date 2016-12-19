import $ from 'jquery';

// This is a split point
require.ensure([], () => {
  // All the code in here, and everything that is imported
  // will be in a separate file
  const library = require('some-big-library');
  $('foo').click(() => library.doSomething());
});
