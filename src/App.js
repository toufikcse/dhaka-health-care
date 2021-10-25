import './App.css';


import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Doctors from './components/Doctors/Doctors';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import DoctorDetail from './components/DoctorDetail/DoctorDetail';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';




function App() {


  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/Doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetail></DoctorDetail>
            </PrivateRoute>
            <Route path="/Contact">
              <Contact></Contact>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/Register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
