import React, { useContext } from "react";
/* import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error"; */
import { Route, Routes, Navigate } from "react-router-dom";
/* import PostIdPage from "../pages/PostIdPage"; */
import { publicRouterDirections, privateRouterDirections } from './../router/router';
import { AuthContext } from "../context";
import MyLoader from "./UI/loader/MyLoader";

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return (
            <MyLoader/>
        )
    }

    return (
        isAuth
        ?
        <Routes>
        {
            privateRouterDirections.map(rout => 
                <Route key={rout.path} exact = {rout.exact} path={rout.path} element = {rout.element} component = {rout.component}/>
            )
        }
        <Route path="*" element = {<Navigate to={'/posts'}/>}/>
    </Routes>
        :
        <Routes>
        {
            publicRouterDirections.map(rout => 
                <Route key={rout.path} exact = {rout.exact} path={rout.path} element = {rout.element} component = {rout.component}/>    
            )
        }
        <Route path="*" element = {<Navigate to={'/login'}/>}/>
    </Routes>
    );
}

export default AppRouter;