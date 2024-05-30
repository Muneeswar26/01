import {withRouter, Link} from 'react-router-dom'
import Header from '../Header'
import TravelTripContext from '../../context/TravelTripContext'

import './index.css'

const MyTrips = () => (
  <TravelTripContext.Consumer>
    {value => {
      const {myTripsList} = value
      const isCreatedList = myTripsList.length >= 1
      return (
        <div className="my-trips-container">
          <Header className="header" />
          {!isCreatedList && (
            <div className="my-trips-content-container">
              <img
                src="https://res.cloudinary.com/dsfextndf/image/upload/v1715695116/Vector_rjv87k.png"
                alt="no trips"
                className="no-trip-image"
              />
              <h1 className="no-trip-heading">No upcoming trips</h1>
              <p className="no-trip-description">
                When you book a trip, you will see your trip details here
              </p>
              <Link to="/book-a-new-trip">
                <button className="no-trip-button">Book a new trip</button>
              </Link>
            </div>
          )}
          {isCreatedList && (
            <div className="trips-list-container">
              <h1 className="my-trips-heading">My Trips</h1>
              <ul className="my-trips-list-ul">
                {myTripsList.map(eachTrip => (
                  <li className="my-trips-item-container" key={eachTrip.id}>
                    <h1 className="trip-item-heading">
                      {eachTrip.endLocation}
                    </h1>
                    <div>
                      <p className="date-text">Date</p>
                      <p className="date-to-text">{`${eachTrip.startDate} to ${eachTrip.endDate}`}</p>
                    </div>
                    <button className="trip-cancel-btn" type="button">
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </TravelTripContext.Consumer>
)

export default withRouter(MyTrips)
