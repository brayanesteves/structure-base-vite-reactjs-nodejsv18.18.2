import                         './App.css';
import { useRoutes }      from 'react-router';
import { Header }         from './components/Header';
import { routes }         from './utils/routes';

function AppRoutesDynamic() {
  
  const element = useRoutes(routes);
  
  return (
    <main>      
      <div className="App">
        <Header />
        {element}
      </div>
    </main>
  )
}

export default App;