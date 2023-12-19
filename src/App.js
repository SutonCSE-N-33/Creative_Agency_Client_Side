import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import PrivateOutlet from './Components/PrivateOutlet/PrivateOutlet';
import { createContext,useState } from 'react';
export const MyContext = createContext();
function App() {
    const [loggedUser,setLoggedUser] = useState({});
  return (
    <MyContext.Provider value={[loggedUser,setLoggedUser]} >
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home loggedUser={loggedUser}></Home>} />
        <Route path="/*" element={<PrivateOutlet></PrivateOutlet>}>
          <Route path="dashboard" element={<Dashboard></Dashboard>} />
        </Route>
        <Route path="/login" element={<Login></Login>} />
    </Routes>
  </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
