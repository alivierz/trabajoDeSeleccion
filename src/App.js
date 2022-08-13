import './App.css';
import { Route, Routes, HashRouter, Link} from 'react-router-dom';
import Home from './pages/home/home';
import PokeProfile from './pages/pokeProfile/pokeProfile';
import Types from './pages/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const selector = useSelector(state => state.type)
  //Estados
  const [visible, setVisible] = useState('invisible')

  const visibilidad = () =>{
    if(visible === 'invisible'){
      setVisible('visible')
    }else{
      setVisible('invisible')
    }
  }
  return (
    <HashRouter  className="App">
      <nav className='navegation'>
        <div className='icon'>
          <FontAwesomeIcon icon={faBars} onClick={visibilidad}/>
        </div>
        <div className={`naveLink ${visible}`}>
          <Link to={'/'}>Home</Link>
          <Link to={'/types'}>Types</Link>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokemon/:id' element={<PokeProfile/>}/>
          <Route path='/types' element={<Types/>}/>
        </Routes>
      <div className='typeFloat'>
        <h4>Type</h4>
        <p>{selector}</p>
      </div>
    </HashRouter>
  );
}

export default App;
