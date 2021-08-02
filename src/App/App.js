import React from 'react'
import SideMenu from '../components/SideMenu';
import './App.css';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';

import Header from '../components/Header';




const theme = createTheme({
    palette: {
        primary: {
            main: "#333996",
            light: "#3c44b126"
        },
        secondary: {
            main: "#f83245",
            light: "#f8324626"
        },
        background: {
            default: "f4f5fd"
        }
    }
})



const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
})

function App() {
    const classes = useStyles();
    return ( <
        ThemeProvider theme = { theme } >
        <
        SideMenu > < /SideMenu> <
        div className = { classes.appMain } >
        <
        Header > < /Header> <
        /div> <
        CssBaseline > < /CssBaseline> <
        /ThemeProvider>
    );
}

export default App;