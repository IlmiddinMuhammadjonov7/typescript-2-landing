import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="main_1">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="button">Get Started</button>
        </div>
        <div>
          <img src="/images/working_with_computer.svg" alt="" />
        </div>
      </div>
      <form className="forma">
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten It!</button>
      </form>
      <div className="article">
        <h2>Advanced Statistics</h2>
        <p className="article_2">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="article_3">
          <div>
            <img src="/images/Group 27.svg" alt="" />
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div>
            <img src="/images/Group 28.svg" alt="" />
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div>
            <img src="/images/Group 29.svg" alt="" />
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="footer_top">
        <h1>Boost your links today</h1>
        <button className="button">Get Started</button>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
