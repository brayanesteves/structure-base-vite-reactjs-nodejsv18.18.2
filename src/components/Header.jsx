import { Link, } from 'react-router-dom';

export const Header = () => {
    return (
        <header>        
        <h1>Welcome to our website!</h1>
        <nav>
          <ul>
            <li><Link to='/search-page'>Search Page</Link></li>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </nav>
      </header>
    );
};