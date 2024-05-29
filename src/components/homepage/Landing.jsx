import '../../stylesheets/desktop/landing.css';
import CircularPlayIcon from './CircularPlayicon';

function Landing() {
  return (
    <div className="landing-section">
      <div>
        <CircularPlayIcon />
      </div>
      <div>
        <p>Beauty of Travelling</p>
        <h1>Let&apos;s Leave The Road, And Take The Travelsi</h1>
        <p>
          Planning for a trip? We will organize your trip with
          the best places and within best budget!
        </p>
      </div>
    </div>
  );
}

export default Landing;
