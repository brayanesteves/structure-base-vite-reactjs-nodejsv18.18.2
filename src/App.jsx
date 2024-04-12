import                         './App.css';
import { Route, Routes, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import { Header }         from './components/Header';
import { SearchPage }     from './components/SearchPage';
import { Tacos }          from './components/Tacos';
import { Home }           from './components/Home';
import { TacoDetails }    from './components/TacoDetails';
import { NotFound }       from './components/http/404';
import { TacoIndex }      from './components/TacoIndex';
import { useAuth }        from './hook/useAuth';

const Login = () => {
  console.log(useAuth());
  const { isLogin } = useAuth();
  const   navigate  = useNavigate();
  const {  state } = useLocation();

  const handleClick = () => {
    isLogin();
    navigate(state?.location?.pathname ?? '/');
  };

  return (
    <button onClick={handleClick}>Login</button>
  );
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const   location          = useLocation();
  if(!isAuthenticated) {
    return (<Navigate to='/login' state={{ location }}/>);
  }
  return children;
};

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/search-page' element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
        <Route path='/tacos/:search' element={<Tacos />}>
          <Route index element={<TacoIndex />} />
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;