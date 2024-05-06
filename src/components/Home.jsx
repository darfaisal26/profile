import { NavLink } from "react-router-dom";
import mypic from "../assets/mypic.jpg";

const Home = () => {
  return (
    <>
      <div className="home ">
        <div className="row_main">
          <div className="row gx-0">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="home_col">
                <img
                  src={mypic}
                  className="img-fluid bg-blue-500"
                  alt="heroimage"
                />
                <h3>Hello, My Name is</h3>
                <h2>
                  Faisal <span>Nazir</span>{" "}
                </h2>
                <h1>I am a FrontEnd Developer</h1>
                <div className="home_text"></div>
                <div className="home_btns " style={{ textAlign: "center" }}>
                  <button type="button" className="home_btn2">
                    <NavLink to="/about">ABOUT ME</NavLink>
                  </button>
                  {/* <button type="button" className="home_btn2">
                    <NavLink to="/resume">Resume</NavLink>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
