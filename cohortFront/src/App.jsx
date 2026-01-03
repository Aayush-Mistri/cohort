import{BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/homePage";

import React from 'react';
 import LandingPage from './components/LandingPage';
import './style/index2.css';

  
function App(){
  return(
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path = "/signup" element = {<Signup/>} />
        <Route path = "/homepage" element = {<HomePage/>} />

      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import LandingPage from './components/LandingPage';
// import './style/index2.css';

// function App() {
//   return <LandingPage />;
// }

// export default App;