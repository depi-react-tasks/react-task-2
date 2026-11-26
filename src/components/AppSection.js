import appStore from '../img/app-store-badge.svg';
import googlePlay from '../img/google-play-badge.svg';

function AppSection() {
  return (
    <div className="app text-center pt-5">
      <div className="contianer">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mb-3">Get the app now!</h3>
            <img src={appStore} className="img-fluid" alt="" />
            <img src={googlePlay} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSection;
