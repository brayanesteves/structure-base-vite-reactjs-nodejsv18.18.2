import { Link, } from 'react-router-dom';

export const SearchPage = () => {

    const tacos = ['cochinita', 'chili', 'carnita'];

    return (
        <div>
            <h1>Search Page</h1>
            <ul>                
                {tacos.map((taco) => {
                    return (<li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>);
                })}
            </ul>
        </div>
    );
};