import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {NavLink} from 'react-router-dom';

interface NavLinkProps {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
}
const navStyle = ({ isActive, isPending, isTransitioning }: NavLinkProps) => {
    return {
        fontWeight: isActive ? 'bold' : '',
        color: isActive ? '#008cff' : '#00000050',
        viewTransitionName: isTransitioning ? 'slide' : '',
    };
};
export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <NavLink to='/home' style={navStyle}>
               Home
            </NavLink>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <NavLink to='/reports' style={navStyle}>
                Reports
            </NavLink>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Summary
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <NavLink to='/current-month' style={navStyle}>
                Current Month
            </NavLink>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <NavLink to='/last-quater' style={navStyle}>
                Last Quarter
            </NavLink>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <NavLink to='/year-end' style={navStyle}>
                Year-end
            </NavLink>
        </ListItemButton>
    </React.Fragment>
);