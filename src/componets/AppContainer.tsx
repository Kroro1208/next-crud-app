"use client"
import { GridViewOutlined, Storefront, } from "@mui/icons-material";
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AppContainer({children}: {children: React.ReactNode}) {
    const router = useRouter();
    const [draweOpen, setDraweOpen] = useState(false);
    const handleDraweClose = () => {
        setDraweOpen(false);
    };

    const handleDraweToggle = () => {
        setDraweOpen(!draweOpen);
    };

    const drawerLinks = [{
        name: 'Dashboard',
        icon: <GridViewOutlined />,
        path: '/admin'
    }];

    const drawer = (
        <>
            <Toolbar sx={{ justifyContent: 'center'}}>
                <Link href='/admin'>
                    <Storefront sx={{
                        fontSize: {xs: 35, sm: 45},
                        color: {xs: 'hsla(185, 64%, 39%, 1.0)'}
                    }}/>
                </Link>
            </Toolbar>

            <Divider />

            <List>
                {drawerLinks.map((link, index) => (
                    <ListItem key={index} disablePadding onClick={handleDraweClose}>
                        <Link href={link.path} passHref style={{textDecoration: 'none'}}>
                            <ListItemButton disableRipple sx={{width: '100vw'}}>
                                <ListItemIcon>{link.icon}</ListItemIcon>
                                    <ListItemText primary={link.name} sx={{color: 'rgb(75, 85, 99)'}}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    );

    const drawerWidth = 240;

    return (
        <Box sx={{display: 'flex'}}>
            {/* デフォルトをリセット */}
            <CssBaseline />
            {/* header */}
            <AppBar>
                <Toolbar sx={{backgroundColor: '#ffffff'}}>
                    <IconButton sx={{mr: 2, display: {sm: 'none'}, color: 'black'}} onClick={handleDraweToggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* navBar */}
            <Box component="nav" sx={{ width: {sm: drawerWidth}}}>
                <Drawer variant="permanent" open={true}
                sx={{ display: { xs: 'none', sm: 'block'}, '& .MuiDrawer-paper': {width: drawerWidth}}}>
                    {drawer}
                </Drawer>
                <Drawer variant="temporary" open={draweOpen} onClose={handleDraweClose}
                sx={{ display: { xs: 'block', sm: 'none'}, '& .MuiDrawer-paper': {width: drawerWidth}}}>
                    {drawer}
                </Drawer>
            </Box>

            {/* main */}
            <Box component="main"
            sx={{ height: '100%', margin: '80px auto', padding: '2rem', color: 'rgb(75, 85, 99)'}}>
                <main>{children}</main>
            </Box>
        </Box>
    );

    
}