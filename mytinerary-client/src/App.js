import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Index from "./components/Index";
//import Footer from "./components/Footer";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";
import Cities from "./components/Cities";
import Navbar from "./components/Navbar";
import itineraryPage from "./components/ItineraryPage";
import { loadUser } from "./actions/authActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid p-0 m-0">
            {/* Segundo Diseño */}
            <Navbar />
            {/* Segundo Diseño */}

            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/loadwithgoogle/:token" component={Index} />
              <Route exact path="/createAcc" component={CreateAcc} />
              <Route exact path="/cities" component={Cities} />
              <Route exact path="/Itinerary/:city" component={itineraryPage} />
            </Switch>
            {/*  <Footer /> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
