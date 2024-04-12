import { NavLink } from "./NavLink";

export const Header = () => {
    return (
        <header>        
        <h1>Welcome to our website!</h1>
        <nav>
          <ul>
            <li><NavLink className={({isActive}) => {
                return isActive ? 'is-active' : '';
            }} to='/'>Home</NavLink></li>
            <li><NavLink to='/search-page'>Search Page</NavLink></li>
          </ul>
        </nav>
      </header>
    );
};