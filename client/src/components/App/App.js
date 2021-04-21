// import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from '../Nav/Nav'
import Registration from '../Registration/Registration';
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ShareBook from "../ShareBook/ShareBook";
import TakeBook from "../TakeBook/TakeBook";
import User from "../UserPage/UserPage";
import UserPage from "../UserPage/UserPage";

function App() {
  return (
    <div>
     <BrowserRouter>
       <Nav />
       <Switch>
       <Route path='/user'>
           <UserPage />
         </Route>
       <Route path='/registration'>
           <Registration />
         </Route>
         <Route path='/login'>
           <Login />
         </Route>
         <Route path='/share'>
           <ShareBook />
         </Route>
         <Route path='/take'>
           <TakeBook />
         </Route>
         <Route path='/'>
           <Main />
         </Route>
       </Switch>
       <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
