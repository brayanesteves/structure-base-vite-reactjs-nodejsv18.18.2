import { useParams, Link, Outlet, } from 'react-router-dom';

export const Tacos = () => {

    const { search } = useParams();

    return (
        <div>
            <h1>Tacos</h1>
            {search}
            <Link to={`details`}>Details</Link>
            <Outlet />
        </div>
    );
};