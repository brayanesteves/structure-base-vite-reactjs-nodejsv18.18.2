import                            './App.css';
import { Route, Routes, }    from 'react-router-dom';
import { Header }            from './components/Header';

// <COMPONENT> //
const Home       = () => <h1>Home</h1>;
const SearchPage = () => <h1>Search Page</h1>;
// <.COMPONENT> //

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />      
      </Routes>
    </div>
  )
}

export default App;