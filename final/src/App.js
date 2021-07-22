import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

import CustomizedDialogs from './components/AddBook/Dialog';
import RegistrationForm from './components/AddBook/addBook';
import NavIteam from './components/Dropdown/dropDown';
import Menu from './components/Dropdown/dropDownMenu';
import Tab from './components/Tabs/CustomTab';
import Header from './components/pages/Header';
import {theme} from './components/Theme/Theme';
import {ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <HashRouter>
    <div>
    <ThemeProvider theme={theme}>
     <Header /> 
     </ThemeProvider> 
  </div> 
  </HashRouter> 
  
   
 
  );
};

export default App;