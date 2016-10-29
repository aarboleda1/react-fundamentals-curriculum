var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('../components/Main');
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
<Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
</Router>
)

module.exports = routes;