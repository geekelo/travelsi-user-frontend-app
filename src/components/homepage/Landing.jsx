import '../../stylesheets/desktop/landing.css';
import '../../stylesheets/mobile-tablets/landing.css';
import CircularPlayIcon from './CircularPlayicon';

function Landing() {
  return (
    <div className="landing-section">
      <div className="landing-sub-sections playbtn-section">
        <CircularPlayIcon />
      </div>
      <div className="landing-sub-sections">
        <p className="fancy-text">Beauty of Travelling</p>
        <h1 className="header-text">Let&apos;s Leave The Road, And Take The Travelsi</h1>
        <p className="info-text">
          Planning for a trip? We will organize your trip with
          the best places and within best budget!
        </p>
      </div>
    </div>
  );
}

export default Landing;
