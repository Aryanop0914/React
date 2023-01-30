import { Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Pages/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Info from './Components/Info';

function App() {
  
  return (
    <>
    <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={<About/> } />
          <Route path="/contact" element={ <Contact/> } />
          <Route path="/Info" element={ <Info/> } />
          <Route path="/signup" element={ <Signup/> } />
          <Route path="/login" element={ <Login/> } />
          </Routes>
          </div>
      
    </>
  );
}

export default App;
