import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import TripsCount from "./components/trips-count/TripsCount";
import Trips from "./components/trips/Trips";
import AddTrip from "./components/add-trip/AddTrip";
import ErrorPage from "./components/error-page/ErrorPage";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: [
        {
          id: uuidv4(),
          place: "Barcelona",
          date: "2020-20-08",
          type: "Europe",
        },
        {
          id: uuidv4(),
          place: "Shanghai",
          date: "2020-08-10",
          type: "Asia",
        },
        {
          id: uuidv4(),
          place: "New York",
          date: "2021-08-06",
          type: "Americas",
        },
        {
          id: uuidv4(),
          place: "Sydney",
          date: "2021-08-01",
          type: "Australia",
        },
        {
          id: uuidv4(),
          place: "Johannesburg",
          date: "2022-04-02",
          type: "Africa",
        },
      ],
    };
  }

  addTrip = (newTrip) => {
    this.setState((prevState) => {
      return {
        trips: [...prevState.trips, newTrip],
      };
    });
  };

  countTrips(filter) {
    const { trips } = this.state;
    return trips.filter((trip) => (filter ? trip.type === filter : trip))
      .length;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <TripsCount
                {...props}
                total={this.countTrips()}
                Europe={this.countTrips("Europe")}
                Asia={this.countTrips("Asia")}
                Americas={this.countTrips("Americas")}
                Australia={this.countTrips("Australia")}
                Africa={this.countTrips("Africa")}
              />
            )}
          />
          <Route
            path="/trips/:filter"
            render={(props) => (
              <Trips
                {...props}
                adventures={this.state.trips}
                delete={this.deleteTrips}
              />
            )}
          />
          <Route
            path="/trips"
            render={(props) => (
              <Trips
                {...props}
                adventures={this.state.trips}
                delete={this.deleteTrips}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => <AddTrip {...props} newTrip={this.addTrip} />}
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
