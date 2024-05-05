import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/i2.png";
import img5 from "../assets/i3.png";
import mypic from "../assets/profile.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container gx-0">
          <div className="row text-center gx-0">
            <div className="col-md-2"></div>
            <div className="col-md-8 px-2 px-md-0">
              <h1>
                <img src={img1} alt="" />
                WELCOME TO MY WORLD
                <img src={img2} alt="" />
              </h1>
              <p className="px-1 px-md-5">
                I am a young Guy, My aim is to become a full-stack developer
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row gx-0 py-md-4 py-3 px-2 p-md-0">
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img3} alt="" />
                <h2>Creativity</h2>
                <p>
                  Creativity is the pulse of my web development narrative,
                  breathing life into each project. Its the ability to see
                  beyond lines of code and templates, bringing forth unique
                  solutions and captivating designs. In my work, creativity is
                  the spark that turns a digital concept into a visual
                  masterpiece, making every project a canvas for innovation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img4} alt="" />
                <h2>Dedication</h2>
                <p>
                  Dedication is the backbone of my web development journey, the
                  unwavering commitment to delivering excellence in every line
                  of code. Its the driving force behind late-night coding
                  sessions, overcoming challenges, and pushing beyond comfort
                  zones. With dedication, each project becomes a testament to my
                  persistence and the pursuit of perfection.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img5} alt="" />
                <h2>Hard Work</h2>
                <p>
                  Hard work is the engine that powers my web development
                  endeavors. Its the persistent effort poured into learning new
                  technologies, refining skills, and turning concepts into
                  functional, polished websites. In the realm of web
                  development, hard work is the key ingredient that transforms
                  aspirations into tangible, impactful outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}
      <div className="section1 container-fluid">
        <div className="container gx-0 px-md-0 px-3">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6" data-aos="fade-down">
              <div className="sec1_col1  mx-4">
                <img
                  src={mypic}
                  alt=""
                  className="img-fluid"
                  style={{ mixBlendMode: "color-burn" }}
                />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className="sec1_col2">
                <h4>ABOUT ME</h4>
                <h1>
                  I am a <span>Web Developer</span>, I
                </h1>
                <h1>Work From Anywhere</h1>
                <p>
                  Hi there! I am Faisal Nazir a Web Developer passionate about
                  crafting seamless online experiences. With expertise in HTML,
                  CSS, JavaScript,Reactjs,ReactNative,ReactQuery a I bring ideas
                  to life on the web. Lets collaborate to create user-friendly,
                  visually stunning websites that leave a lasting impact.
                </p>
                <p>
                  Feel free to adapt and use this as needed for your portfolio
                  website.
                </p>
                <div className="row gx-0">
                  <div className="col-md-7">
                    <h5>NAME :</h5>
                    <p>FAISAL NAZIR</p>
                    <h5>EMAIL :</h5>
                    <p>iamfaisal779@gmail.com</p>
                    <h5>PHONE NO :</h5>
                    <p>9596438189</p>
                  </div>
                  <div className="col-md-5">
                    <h5>AGE :</h5>
                    <p>24</p>
                    <h5>EDUCATION :</h5>
                    <p>MCA</p>
                    <h5>WEB DEVELOPER :</h5>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}
      {/* ************************************* */}
    </>
  );
};

export default About;
