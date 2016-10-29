var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')
// //Sentry configuration
// var sentryKey = 'a3cefcfd9ede4de7885668b827cee836';
// var sentryApp = '110459';
// var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp

// var _APP_INFO = {
// 	name: 'Weather-App',
// 	branch: 'branch-1',
// 	version: '1.0'
// }
//a method on the window object in order to see errors from Raven
// window.onerror = function () {
//   Raven.showReportDialog();
// }
//this configures Raven
// Raven.config(sentryURL, {
//   release: _APP_INFO.version,
//   tags: {
//     branch: _APP_INFO.branch,
//     github_commit: 'this is my github commit'
//   }
// }).install();

ReactDOM.render(routes, document.getElementById('app'))