// import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from '../Nav/Nav'
import Registration from '../Registration/Registration';
import Login from "../Login/Login";

function App() {
  return (
    <div>
     <BrowserRouter>
       <Nav />
       <Switch>
       <Route path='/registration'>
           <Registration />
         </Route>
         <Route path='/login'>
           <Login />
         </Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
