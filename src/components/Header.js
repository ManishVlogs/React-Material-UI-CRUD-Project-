import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff'
    }
})


export default function Header() {

    const classes = useStyles();
    return ( <
        AppBar position = "static"
        className = { classes.root } >
        <
        Toolbar >
        <
        Grid container >
        <
        Grid >
        <
        InputBase / >
        <
        /Grid> <
        Grid item sm > < /Grid> <
        Grid >
        <
        IconButton >
        <
        Badge badgeContent = { 3 }
        color = "secondary" >
        <
        NotificationsNoneIcon / >
        <
        /Badge> <
        /IconButton> <
        IconButton >
        <
        Badge badgeContent = { 3 }
        color = "primary" >
        <
        ChatIcon / >
        <
        /Badge>                  <
        /IconButton> <
        IconButton >
        <
        PowerSettingsNewIcon >

        <
        /PowerSettingsNewIcon> <
        /IconButton> <
        /Grid> <
        /Grid> <
        /Toolbar> <
        /AppBar>
    )
}