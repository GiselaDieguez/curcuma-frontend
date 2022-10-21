import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, SendIcon } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { url } from '../api/api';
import { addTurn } from '../redux/slices/turnSlice';
export const Searchpage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${url}/listProv`) 
    //fetch("https://curcuma.fly.dev/listProv")
      .then((response) => response.json())
      .then((res) => {
        setValues(res)
        setIsLoading(false);
      });
  }, [isLoading]);

  const handleSendProps = (id) =>{
    dispatch(addTurn(id))
  }
  
  return (
    <>
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
                      alt="green iguana"
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
                    <NavLink to='/booking'>
                      <Button variant="contained"  onClick={() => handleSendProps(prov.prov_id)}>
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
    </>
  )
}
