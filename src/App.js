import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import BookANewTrip from './components/BookANewTrip'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import TravelTripContext from './context/TravelTripContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    myTripsList: [],
  }

  addTripList = tripsDetails => {
    this.setState(prevState => ({
      myTripsList: [...prevState.myTripsList, tripsDetails],
    }))
  }

  render() {
    const {myTripsList} = this.state
    return (
      <TravelTripContext.Provider
        value={{
          myTripsList,
          addTripList: this.addTripList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookANewTrip}
          />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <Route component={NotFound} />
        </Switch>
      </TravelTripContext.Provider>
    )
  }
}

export default App