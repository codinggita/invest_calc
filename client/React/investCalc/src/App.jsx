import './App.css';
import Nav from './Nav';
import FinCal from './FinCal';
import Home from './Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LumsumCal from './LumsumCal';



function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/calculator' element = {<FinCal/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
    

  );
  
}

export default App;
