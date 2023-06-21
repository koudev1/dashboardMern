import React, { useEffect, useState } from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOultined,
    Groups20utlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointofSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import profileImage from "assets/profile.jpg";

const Sidebar = ({
    drawerwidth,
    isSidabarOpen,
    setIsSidabarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation;
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substing(1));
    }, [pathname]);

    return (
        <Box component="nav">
            
        </Box>
    );
};

export default Sidebar;
