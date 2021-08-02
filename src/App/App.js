import React from 'react'
import SideMenu from '../components/SideMenu';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core'
import Header from '../components/Header';


const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
})

function App() {
    const classes = useStyles();
    return ( <
        >

        <
        SideMenu > < /SideMenu> <
        div className = { classes.appMain } >
        <
        Header > < /Header> <
        /div> <
        CssBaseline > < /CssBaseline> <
        />
    );
}

export default App;