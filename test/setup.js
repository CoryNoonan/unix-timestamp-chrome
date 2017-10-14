const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
const sinon = require('sinon');

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.window.localStorage = {
  setItem: sinon.stub().returns(undefined),
  getItem: sinon.stub().returns("{}")
}
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);