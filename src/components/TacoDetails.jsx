import { useParams, } from 'react-router-dom';

export const TacoDetails = () => {
    const { search } = useParams();

    return (<h1>Details {search}</h1>);
};