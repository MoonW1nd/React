import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App.jsx";
import {Router, Route, hashHistory} from 'react-router';

// ReactDOM.render(
// 	<Router history={hashHistory}>
// 		<Route path='/' component={App}>
// 		</Route>
// 	</Router>,
// 	document.getElementById("mount-point")
// );
ReactDOM.render(
	<App/>,
	document.getElementById("root")
);