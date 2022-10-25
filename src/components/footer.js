import React from "react";
import './styles/footer.css'
import healthydent from '../imagenes/healthydent.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Footer = () => {
    return (
<footer id="sticky-footer" className="flex-shrink-0">
    <div className="text-center">
        <a>© 2022 Copyright: </a>
        <a className="text" href="https://curcuma.vercel.app/">Curcuma</a>
        <a> | In contribution with</a>
        <a href="https://healthydent.vercel.app/"><img src={healthydent} className='healthydent' /></a>
        <br></br>
    </div>
    <LocationOnIcon style={{color:"rgb(181 181 181)"}} /><a>Rosario, Santa Fe </a>
</footer>
    );
};