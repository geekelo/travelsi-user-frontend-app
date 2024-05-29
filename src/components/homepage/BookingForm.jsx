import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/desktop/bookingForm.css';
import '../../stylesheets/mobile-tablets/bookingForm.css';
import '../../stylesheets/desktop/hideDateicon.css';

function BookingForm() {
  return (
    <div className="booking-form-section">
      <form className="booking-form-container">
        <div>
          <p>Search:</p>
          <label htmlFor="search" aria-controls="search">
            <FontAwesomeIcon icon={faSearch} />
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </label>
        </div>
        <div>
          <p>Select Your Date:</p>
          <label htmlFor="date" aria-controls="date">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <input
              id="date"
              name="date"
              type="date"
              value="20/02/2024"
              aria-label="date"
            />
          </label>
        </div>
        <div>
          <p>Select Your Date:</p>
          <label htmlFor="second-date" aria-controls="date">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <input
              id="second-date"
              name="second-date"
              type="second-date"
              value="29/11/2024"
              aria-label="Second-date"
            />
          </label>
        </div>
        <div>
          <p>No. of Person:</p>
          <label htmlFor="numberOfPersons">
            <FontAwesomeIcon icon={faUserFriends} />
            <select id="numberOfPersons" name="numberOfPersons">
              <option disabled>No. of Person</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        <div>
          <input type="Submit" />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
