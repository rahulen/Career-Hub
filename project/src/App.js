import { HashRouter, Routes, Route } from 'react-router-dom';
import Createaccount from "./user/signup";
import Login from './user/login';
import Home from './home';
import Topheader from './header';

function App() {
  return (
    <HashRouter>
      <Topheader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Createaccount />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
  
}

export default App;
