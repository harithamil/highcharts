
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Components from './Components';
import Components1 from '../src/components/Components1'
import After from'./components/After'
import Before from './components/Before';
import Pausetime from './components/Pausetime';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Components/>}/>
        <Route path='/components' element={<Components1/>}/>
        <Route path='/before' element={<Before/>}/>
        <Route path='/after' element={<After/>}/>
        <Route path='/pausetime' element={<Pausetime/>}/>
      </Routes>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
