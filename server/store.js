import React from "react";
import { createStore } from "redux";
import { renderToString } from "react-dom/server";
import { Route, StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

const createServerStore = (rootReducer, initialState) => {
  return createStore(rootReducer, initialState);
};

export const createServerStaticStore = ({ rootReducer, component, path }) => {
    // Create a store and sense of history based on the current path
    const store = createServerStore(rootReducer, reduxState);

    // Render App in React
    const routeMarkup = renderToString(<Provider store={store}>
        <StaticRouter location={req.path}>
        <Route component={component} />
        </StaticRouter>
    </Provider>);
};
