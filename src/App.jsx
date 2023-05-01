import './App.css';
import PerksGenerator from "./components/PerksGenerator";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import ShowPerks from './components/ShowPerks';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBar /> }>
            <Route index element={ <Home /> } />
            <Route path='showPerks' element={ <ShowPerks /> } />
            <Route path='perkGenerator' element={ <PerksGenerator /> } />

            <Route path='*' element={ <Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
