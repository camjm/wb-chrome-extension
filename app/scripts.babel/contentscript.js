'use strict';

console.log('\'Allo \'Allo! Content script');

function textNodesUnder(element) {
  let node;
  let textNodes = [];
  let walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  while (node = walker.nextNode()) {
    textNodes.push(node);
  }

  return textNodes;
}

let textNodes = textNodesUnder(document.body);

textNodes.forEach(node =>
  node.nodeValue = 'test'
);
