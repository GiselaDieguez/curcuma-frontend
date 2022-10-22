import './styles/home.css'
import { Footer } from './footer.js';
import logo from './styles/image/Curcuma.png'
import slogan from './styles/image/Slogan.png'
import slogan2 from './styles/image/slogan2.png'
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
    return (
        <body>
            <div class="bg-image">
            </div>
            <img src={logo} class="bg-logo"></img>
            <img src={slogan2} class="slogan"></img>
            <NavLink to="/search">
            <button class="buttonNow">Booking Now</button>
            </NavLink>
            <Footer />
        </body>
    );
}
