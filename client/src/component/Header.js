import { useNavigate } from "react-router-dom";
import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'
import { CryptoState } from "../CryptoContext";


const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const Header = () => {
    const classes = useStyles();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: "dark"
        }
    })
const { currency , setCurrency} = CryptoState()


    const navigate = useNavigate();
    function handleClick() {
        navigate("/")
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={handleClick} variant="h6" className={classes.title}>
                            Crypto Analyser
                        </Typography>

                        <Select variant='outlined'
                         value={currency}
                        style={{
                            width: 100,
                            height: 40,
                            marginRight: 15
                        }}
                        onChange={(e)=> setCurrency(e.target.value)}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'INR'}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header