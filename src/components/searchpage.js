import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, SendIcon } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

export const Searchpage = () => {
  const [values, setValues] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //fetch("http://localhost:4000/listProv") 
    fetch("https://curcuma.fly.dev/listProv")
      .then((response) => response.json())
      .then((res) => {
        setValues(res)
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <>
    <div className='container'>
      {
        isLoading ? (
          <h1>Cargando...</h1>
        )
          : (
            values.map((prov) => (
                <Card sx={{ maxWidth: 345 }} key={prov.prov_id} style={{margin:"10px"}}>
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
                    <Button variant="contained">
                      Reservá Pa
                    </Button>
                  </CardActions>
                </Card>
            ))
          )
      }
      </div>
    </>
  )
}
