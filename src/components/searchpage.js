import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, CssBaseline, makeStyles,  InputBase } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { url } from '../api/api';
import { addTurn } from '../redux/slices/turnSlice';
import './styles/styles.css'
import SearchIcon from "@material-ui/icons/Search";
import { Footer } from './footer.js';
import Header from './header';

export const Searchpage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearchName] = useState("")
  const [searchAdress, setSearchAdress] = useState("")
  const [provTable, setTable]= useState([]);
  const classes = useStyle()

  useEffect(() => {
    fetch(`${url}/listProv`) 
      .then((response) => response.json())
      .then((res) => {
        setValues(res);
        setTable(res); 
        setIsLoading(false);
      });
  }, [isLoading]);

  const handleSendProps = (id) =>{
    dispatch(addTurn(id))
  }

const onChangeName = (e) => {
  setSearchName(e.target.value)
  filterName(e.target.value)
}

const onChangeAdress = (e) => {
  setSearchAdress(e.target.value)
  filterAdress(e.target.value)
}

const filterName=(filterData)=>{
  var searchResults=provTable.filter((data) =>{
    if (data.name_prov.toString().toLowerCase().includes(filterData.toLowerCase())) {
      return data;
    }
  });
  setValues(searchResults);
}

const filterAdress=(filterData)=>{
  var adressResults=provTable.filter((data) =>{
    if (data.adress_prov.toString().toLowerCase().includes(filterData.toLowerCase())) {
      return data;
    }
  });
  setValues(adressResults);
}
  return (
    <> 
    <Header />
      <div className='filters'> 
      <CssBaseline/>
      <div className={classes.root}>
        <div className={classes.dates}>
        <div className={classes.center} style={{border:"none", width: "566px"}}>
          <SearchIcon/><input value={search} onChange={(e) => onChangeName(e)} placeholder='Search name..' inputProps={{className: classes.input}} style={{backgroundColor:"#f8f8f8"}}/>
        </div>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.dates}>
        <div className={classes.center} style={{border:"none", width: "566px"}}>
          <SearchIcon/><input value={searchAdress} onChange={(e) => onChangeAdress(e)} placeholder='Search adress...' inputProps={{className: classes.input}} style={{backgroundColor:"#f8f8f8"}}/>
        </div>
        </div>
      </div>
      </div>
    <div className='row' style={{width: "100%"}}>
      {
        isLoading ? (
          <h1>Cargando...</h1>
        )
          : (
            values.map((prov) => (
              <div className='col-md-4'>
                <Card sx={{ maxWidth: 200 }} key={prov.prov_id} style={{margin:"10px"}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://cdn-3.expansion.mx/2a/df/e718a6454730a13f1aac0525e5ec/restaurante-cena-romantica-14-feb.jpg"
                      alt="Restaurant"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {prov.name_prov}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {prov.adress_prov}
                        <br></br>
                        {prov.tel_prov}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NavLink to='/booking' style={{textDecoration:"none"}}>
                      <Button variant="contained"  onClick={() => handleSendProps(prov.prov_id)} style={{backgroundColor:"#feb824", color: 'white'}}>
                        Reservá Pa
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </div>                
            ))
          )
      }
      </div>
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
