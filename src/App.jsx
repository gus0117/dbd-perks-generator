import './App.css';
import PerksGenerator from "./components/PerksGenerator";
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import ShowPerks from './components/ShowPerks';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={ <NavBar /> }>
            <Route index element={ <Home /> } />
            <Route path='showPerks' element={ <ShowPerks /> } />
            <Route path='perkGenerator' element={ <PerksGenerator /> } />

            <Route path='*' element={ <Navigate replace to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
