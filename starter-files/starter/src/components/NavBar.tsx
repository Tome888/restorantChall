import { NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <nav>
            <NavLink to={'/'}>
            <p style={{color: 'black'}}>RESTAURANT</p>
            </NavLink>
            <NavLink to={'/favorites'}>
            <i style={{color: 'red'}} className="fa-solid fa-heart fa-2x"></i>
            </NavLink>
        </nav>
    )
}