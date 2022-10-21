import React from 'react'
import { CssBaseline, makeStyles, InputBase, Button } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import { Searchpage } from './searchpage';
import { Footer } from './footer.js';
import './styles/styles.css'

export const Home = () => {
  const classes = useStyle()
  return (
    <>
      <CssBaseline/>
      <div className={classes.root}>
        <div className={classes.dates}>
        <div className={classes.center}>
          <SearchIcon/><InputBase fullWidth placeholder='Search here...' inputProps={{className: classes.input}} />
          <Button>Enter</Button>
        </div>
        </div>
      </div>
      <Searchpage/>
      <Footer />
    </>
  )
}

const useStyle = makeStyles((theme)=>({
  root: {
  },
  center: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5),
    margin: theme.spacing(4),
    border: "1px solid lightgrey",
    borderRadius: "20px",
    minWidth: "10px"
  },
  input: {
    fontSize:"1.2rem",
    padding: theme.spacing(1,4,1,4)
  }
}))

