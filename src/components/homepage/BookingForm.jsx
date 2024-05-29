import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/desktop/bookingForm.css';
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
            />
          </label>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faUserFriends} />
            No. of Person
          </p>
          <select>
            <option value="">No. of Person</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
