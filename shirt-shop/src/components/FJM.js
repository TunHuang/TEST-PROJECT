// Packages Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from '@fortawesome/free-brands-svg-icons';

// I M P O R T   C O N T E X T


// I M P O R T   S T Y L I N G
import '../styles/App.scss';
import '../styles/fjm.scss';

// Files Import
import fjm from '../images/fjm-logo.png';
import itzFlorian from '../images/itzFlorian.jpeg';
import grossesbewirken from '../images/grossesbewirken.png';
import BreffJaun from '../images/BreffJaun.jpeg';

const FJM = () => {
  return (
    <div className="fjm-parent-container">
      <div className="general-info-container">
        <img
          src={fjm}
          width="45"
          height="45"
          className="d-inline-block align-top"
          alt="FJM logo"
        />
        <h5>The "nerdsherd" Shop was created and designed by "FJM" which consists of Florian, Jeff and Martin as a final project for the "Single Page Application Module". This three gusys are DCI Web Developer Students.
        </h5>
        <h5>Have a look at our Profiles and at our other Projects on Github</h5>
      </div>
      <div className="profile-card-container">
      <div className='single-profile-card'>
        <img src={itzFlorian } alt="" />
        <h1>Florian Mewes</h1>
        <p>I am on going Web Developer</p>
        <div className="link">
            <a
              href="https://github.com/itzFlorian"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
                className='link'
              />
            </a>
            <p>itzFlorian</p>
          </div>
      </div>
      <div className='single-profile-card'>
        <img src={grossesbewirken} alt="" />
        <h1>Martin Gross</h1>
        <p>I am on going Web Developer</p>
        <div className="link">
            <a
              href="https://github.com/grossesbewirken"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
                className='link'
              />
            </a>
            <p>grossesbewirken</p>
          </div>
      </div>
      <div className='single-profile-card'>
        <img src={BreffJaun} alt="" />
        <h1>Jeff Braun</h1>
        <p>Hello, my name is Jeff and i'm web developer student, class representative and tutor at the DCI in germany.</p>
        <div className="link">
            <a
              href="https://github.com/BreffJaun"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
                className='link'
              />
            </a>
            <p>BreffJaun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FJM;
