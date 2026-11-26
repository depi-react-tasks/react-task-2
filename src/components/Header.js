import appStore from '../img/app-store-badge.svg';
import googlePlay from '../img/google-play-badge.svg';
import project from '../img/project.PNG';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 boxes">
            <h2>Showcase your app beautifully.</h2>
            <p>Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>
            <img src={appStore} alt="" className="img-fluid" />
            <img src={googlePlay} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={project} alt="" className="img-fluid img-header" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
