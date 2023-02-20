import React from 'react';
import MainHeader from "../components/MainHeader";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <>
         <MainHeader />
            {/*//placeholder, shows react where nested components should be render*/}
          <Outlet />
        </>
    );
};

export default RootLayout;

//layout route that wrapped around other routes
//sharing MainHeader component