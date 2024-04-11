import                         './App.css';
import { Route, Routes, } from 'react-router-dom';
import { Header }         from './components/Header';
import { SearchPage }     from './components/SearchPage';
import { Tacos }          from './components/Tacos';
import { Home }           from './components/Home';
import { TacoDetails }    from './components/TacoDetails';
import { NotFound }       from './components/http/404';
import { TacoIndex }      from './components/TacoIndex';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:search' element={<Tacos />}>
          <Route index element={<TacoIndex />} />
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;