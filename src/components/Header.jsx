import { Link, NavLink as NavLinkCustom } from 'react-router-dom';

const NavLink = ({ to, children, ...props }) => {
    return (
        <NavLinkCustom {...props} className={({isActive}) => {
            return isActive ? 'is-active' : '';
        }} to={to}>{children}</NavLinkCustom>
    );
};

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