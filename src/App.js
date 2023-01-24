import './App.css';
import { Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
// import Header1 from './Components/Header1';
import Login from './Components/Login';
// import Signup from './Components/Signup';
import Signup from './Components/Signup';

function App() {
  
  return (
    <>
    <div className="App">
        {/* <Navbar/> */}
        <Signup/>
        {/* <Routes> */}
          {/* <Route path="/" element={ <Home/> } />
          <Route path="/about" element={<About/> } />
          <Route path="/contact" element={ <Conatact/> } /> */}
          {/* <Route path="/signup" element={ <Signup/> } />
          <Route path="/login" element={ <Login/> } />
          </Routes> */}
          </div>
      
    </>
  );
}

export default App;
