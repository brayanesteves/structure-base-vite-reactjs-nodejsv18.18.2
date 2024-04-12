import                         './App.css';
import { useRoutes }      from 'react-router';
import { Header }         from './components/Header';
import { routes }         from './utils/routes';

function App() {
  
  const element = useRoutes(routes);
  
  return (
    <div className="App">
      <Header />
      {element}
    </div>
  )
}

export default App;