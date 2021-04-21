// import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from '../Nav/Nav'
import Registration from '../Registration/Registration';
import Login from "../Login/Login";
import Main from "../Main/Main";

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
         <Route path='/'>
           <Main />
         </Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
