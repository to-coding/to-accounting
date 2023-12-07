import {createBrowserRouter} from "react-router-dom";
import {createRoutesFromElements, Route} from "react-router";
import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import {HomeBoard} from "../../pages/home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="home" element={<HomeBoard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<p>Nothing here</p>} />
        </Route>
    ))


export default router