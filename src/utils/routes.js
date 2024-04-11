import { SearchPage }  from './components/SearchPage';
import { Tacos }       from './components/Tacos';
import { Home }        from './components/Home';
import { TacoDetails } from './components/TacoDetails';
import { NotFound }    from './components/http/404';

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/search-page', element: <SearchPage /> },
    {
      path: '/tacos/:search',
      element: <Tacos />,
      children: [
        { path: 'details', element: <TacoDetails /> },
      ],
    },
    { path: '*', element: <NotFound /> },
];