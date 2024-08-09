import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router/Routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => 
                <Route component={route.component} path={route.path} exact={route.exact}/>
            )}
        </Routes>
    );
};

export default AppRouter;