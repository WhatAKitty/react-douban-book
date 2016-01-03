var React = require('react');
var ReactDom = require("react-dom");
var GuideMenuApp = require('guide-menu');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
ReactDom.render(
  <GuideMenuApp guideMenu={initialState}/>,
  document.getElementById('guideMenu')
);