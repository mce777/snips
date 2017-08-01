// DocumentFragments are DOM Nodes. They are never part of the main DOM tree.
// The usual use case is to create the document fragment, append elements
// to the document fragment and then append the document fragment to the DOM tree.
// In the DOM tree, the document fragment is replaced by all its children.
 
// Since the document fragment is in memory and not part of the main DOM tree,
// appending children to it does not cause page reflow (computation of element's position and geometry).
// Consequently, using document fragments often results in better performance.

// =====================================================================

const element  = document.getElementById('ul'); // assuming ul exists
const fragment = document.createDocumentFragment();
const browsers = ['Firefox', 'Chrome', 'Opera', 
    'Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);
