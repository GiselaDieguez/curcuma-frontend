import React, { useEffect } from 'react';
import { AppBar, InputBase, makeStyles, Toolbar, Typography, Avatar, IconButton, Drawer, List, ListItem, Button } from "@material-ui/core";
import { useState } from "react";
import logo from "../imagenes/Curcuma.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] =useState(true)
  const [drawerOpen, setDrawerOpen]=useState(false)
  const classes = useStyle()
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/signin'; 
    navigate(path);
  }

  let navigate2 = useNavigate(); 
  const routeChange2 = () =>{ 
    let path = '/login'; 
    navigate2(path);
  }


    useEffect(()=>{
      const responsiveness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false)
      responsiveness();
      window.addEventListener("resize", ()=> responsiveness())
    },[])

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setDrawerOpen(true)
    }
    const handleDrawerClose = () => {
      setDrawerOpen(false)
    }

    const headersData = ["My account", "Reservations", "Log Out"]
    const getDrawerChoices = () => {
      return headersData.map((data)=>{
        return(
          <List>
            <ListItem>{data}</ListItem>
          </List>
        )
      })
    }
    return (
    <Toolbar className={ classes.toolbar}>
      <IconButton {...{
          edge:"start", 
          color:"#ccc",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
        }}>
        <MenuIcon fontSize='Large'/>
      </IconButton>
      <Drawer {...{
        anchor: "left",
        open: drawerOpen,
        onClose: handleDrawerClose,
      }}>
        <div>{getDrawerChoices()}</div>
      </Drawer>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="logo"/>
      </Link>
      <div className={classes.right}>
          <Button>Sign In</Button>
          <Button onClick={routeChange2}><Avatar className={classes.avatar}/></Button>
      </div>
    </Toolbar>
    )
  }

  const displayDesktop = () => (
    <Toolbar className={ classes.toolbar}>
        <Link to="/">
          <img src={logo} className={classes.logo} alt="logo"/>
        </Link>
        <div className={classes.right}>
          <Button onClick={routeChange}>Sign In</Button>
          <Avatar className={classes.avatar}/>
        </div>
      </Toolbar>
    )
  return (
    <AppBar className={classes.root}>
      {
      mobile ? displayMobile() : displayDesktop()              
      }
    </AppBar>
  )
}

const useStyle = makeStyles((theme)=>({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 99,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

  },
  logo: {
    height: "110px",
    /*objectFit: "contain" --> se preserban las dimensiones de la imagen*/
  },
  center: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    border: "1px solid lightgrey",
    borderRadius: "20px",
    minWidth: "100px"
  },
  input: {
    fontSize:"1.5rem",
    padding: theme.spacing(1,5,1,5)
  },
  right: {
    color:"#333",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2)
  },
  avatar: {
    marginLeft: theme.spacing(2)
  }
}))

export default Header