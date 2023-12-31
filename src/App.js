import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Dashboard from "./pages/dahsboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/login/*" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=':userId' element={<Single/>}/>
              <Route path='new' element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=':productId' element={<Single/>}/>
              <Route path='new' element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

