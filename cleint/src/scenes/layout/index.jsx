import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidabarOpen, setIsSidabarOpen] = useState(true);
    return (
        <Box
            display={isNonMobile ? "flex" : "block"}
            width="100%"
            height="100%"
        >
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidabarOpen={isSidabarOpen}
                setIsSidabarOpen={setIsSidabarOpen}
            />
            <Box>
                <Navbar
                    isSidabarOpen={isSidabarOpen}
                    setIsSidabarOpen={setIsSidabarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
