import                            './App.css';
import { Route, Routes, }    from 'react-router-dom';
import { Header }            from './components/Header';
import { SearchPage }        from './components/SearchPage';
import { Tacos }             from './components/Tacos';
import { Home }              from './components/Home';
import { TacoDetails }       from './components/TacoDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:search' element={<Tacos />}>
          <Route path='details' element={<TacoDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;