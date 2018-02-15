import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "./config/history";
import ProductList from "./features/products-list";

const App = () => (
	<Router history={history}>
		<div>
			<Route exact path="/" component={ProductList} />
		</div>
	</Router>
);

export default App;
