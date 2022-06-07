import "./main.css";
import {isMobile} from "react-device-detect";

function App() {
  return (
    <div className="main-card">
      <div className="content-box">
          <h1>
          Get <span>insights</span> that help your business grow.
          </h1>
          <p>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="stats">
            <span>10k+<p>companies</p></span>
            <span>314 <p>templates</p></span>
            <span>12m+<p>queries</p> </span>
          </div>
      </div>
      <div className="banner-box">
        <img src={process.env.PUBLIC_URL + isMobile?'/images/image-header-mobile.jpg':'/images/image-header-desktop.jpg'}></img>
      </div>

    </div>
  );
}

export default App;
