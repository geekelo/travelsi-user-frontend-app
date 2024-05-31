import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';// Import the play icon
import '../../stylesheets/desktop/circularPlayicon.css';

function CircularPlayIcon() {
  return (
    <div className="icon-circle">
      <FontAwesomeIcon icon={faPlay} />
    </div>
  );
}

export default CircularPlayIcon;
