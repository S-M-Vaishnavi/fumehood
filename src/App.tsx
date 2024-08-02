import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Settings from './components/Settings';
import Time from './components/Time';
import Wifi from './components/Wifi';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/time" element={<Time />} />
        <Route path='/wifi' element={<Wifi/>}/>
        <Route path="/home" element={<Home />} />
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
