import HeaderTop from "./component/header";
import Logged from "./logged";
import Data from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
  <BrowserRouter>
      <div>
      <HeaderTop/>
            
                <Routes>    
                <Route path="/" element={<Logged to="/logged" />} />
                    <Route path='/logged' element={<Logged/>}/>
                    <Route path='/data' element={<Data/>}/>
                </Routes>
            </div>
    </BrowserRouter>
);
}

export default App;
