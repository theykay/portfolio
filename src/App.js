import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import ViewProjects from "./pages/ViewProjects";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <GlobalProvider>
          <Navbar />

          <div className="App">
            <Switch>
              <Route exact path='/portfolio/' component={Homepage} />
              <Route exact path='/portfolio/projects' component={ViewProjects} />
              <Route exact path='/portfolio/contact' component={Contact} />
            </Switch>
          </div>
          <Footer />
        </GlobalProvider>
      </Router>
    </>
  );
}

export default App;
