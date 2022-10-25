import './styles/home.css'
import { Footer } from './footer.js';
import logo from './styles/image/Curcuma.png'
import slogan2 from './styles/image/slogan2.png'
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
    return (
        <body>
            <div className="bg-image">
            </div>
            <img src={logo} className="bg-logo"></img>
            <img src={slogan2} className="slogan"></img>
            <NavLink to="/search">
            <button className="buttonNow">Booking Now</button>
            </NavLink>
            <Footer />
        </body>
    );
}
