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
import vine from '../imagenes/wine.gif';


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
        <div className={classes.center} style={{border:"none", width: "566px"}}>
          <SearchIcon/><input value={search} onChange={(e) => onChangeName(e)} placeholder='Search name..' inputProps={{className: classes.input}} style={{backgroundColor:"rgb(255 255 255)", fontFamily:'Poppins'}}/>
        </div>
        <div className={classes.center} style={{border:"none", width: "566px"}}>
          <SearchIcon/><input value={searchAdress} onChange={(e) => onChangeAdress(e)} placeholder='Search adress...' inputProps={{className: classes.input}} style={{backgroundColor:"rgb(255 255 255)", fontFamily:'Poppins'}}/>
        </div>
      </div>
    <div className='row'>
      {
        isLoading ? (
          <img src={vine} class="vineImg" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-30%, -30%)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0px',
            margin: '50px 0px',
            width: '200px',
            height: 'auto'
          }}></img>
        )
          : (
            values.map((prov) => (
              <div className='col-md-4' style={{padding:"0px"}}>
                <Card sx={{ maxWidth: "100%" }} key={prov.prov_id} style={{margin:"10px"}}>
                  <CardActionArea>
                    <CardMedia/>
                    <CardMedia
                      className='cardRestaurant'
                      component="img"
                      src={prov.URL}
                      alt="Restaurant"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'Poppins'}}>
                        {prov.name_prov}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{fontFamily:'Poppins'}}>
                        {prov.adress_prov}
                        <br></br>
                        {prov.tel_prov}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NavLink to='/booking' style={{textDecoration:"none"}}>
                      <Button variant="contained"  onClick={() => handleSendProps(prov.prov_id)} style={{backgroundColor:"#feb824", color: 'white', fontFamily:'Poppins'}}>
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
    margin: "24px",
    border: "1px solid lightgrey",
    borderRadius: "20px",
    minWidth: "10px"
  },
  input: {
    fontSize:"1.2rem",
    padding: theme.spacing(1,4,1,4)
  }
}))
