import FactCheckIcon from '@mui/icons-material/FactCheck';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import "../Navbar/NavBar.css"
export default function Drawer() {
    const { role } = useSelector((state) => state.user);
    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open,) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'left' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {role === 'company' ? <List>
                {['Post New Jobs', 'Posted Jobs'].map((text, index) => (
                    <Link to={text === 'Post New Jobs' ? "/postnewjobs" : "/postedjobs"} style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem key={text} disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <WorkIcon /> : <WorkHistoryIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />

                    </Link>
                ))}
            </List>
                :
                <List>
                    {['View Applied Jobs'].map((text, index) => (
                        <Link to={text === 'View Applied Jobs' ? "/appliedjobs" : "/relatedjobs"} style={{ textDecoration: "none", color: "inherit" }}>
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <FactCheckIcon /> : <LinkIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </Link>
                    ))}
                </List>}
        </Box >
    );

    return (
        <div>

            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)} ><  MenuIcon className='DrawerIcon' /></Button>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
