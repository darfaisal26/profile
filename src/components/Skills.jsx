import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const ab = 80;
  const cd = 75;
  const ef = 70;
  const gh = 75;
  const ij = 70;
  const nj = 40;
  const Ts = 40;
  return (
    <>
      <div className="skills">
        <div className="container gx-0 px-3 px-md-0">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="skill_col1">
                <h5>MY SKILLS</h5>
                <h1>I am great in what I</h1>
                <h1>do and I am loving it</h1>
                <p className="mx-4 text-white">
                  My skill set includes proficiency in HTML, CSS, JavaScript,
                  React,React Native,NextJs , TypeScript,State Management tools
                  like Redux,ReactQuery,Context. I have experience in creating
                  responsive, interactive websites and web applications.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill_col2">
                <div className="row ">
                  <div className="col-md-4 col-6">
                    <div className="skill_col shadow-lg">
                      {/* <CircularProgressbar value={ab} text={`${ab}%`} /> */}
                      <h3>HTML</h3>
                      <img
                        src={
                          "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col shadow-lg">
                      {/* <CircularProgressbar value={cd} text={`${cd}%`} /> */}
                      <h3>CSS</h3>
                      <img
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/CSS_icon.svg/1200px-CSS_icon.svg.png"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col shadow-lg">
                      {/* <CircularProgressbar value={cd} text={`${cd}%`} /> */}
                      <h3 className="">TailWind Css</h3>
                      <img
                        src={
                          "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxy1c2bvl6odeo52dodk.jpg"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col  shadow-lg">
                      {/* <CircularProgressbar value={ef} text={`${ef}%`} /> */}
                      <h3>JavaScript</h3>
                      <img
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col shadow-lg">
                      {/* <CircularProgressbar value={gh} text={`${gh}%`} /> */}
                      <h3>React Js</h3>
                      <img
                        src={
                          "https://i.pinimg.com/474x/b4/86/f5/b486f569306d7ed7f32f6893387699e6.jpg"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col shadow-lg">
                      <h3>ReactNative</h3>
                      <img
                        src={
                          "https://i.pinimg.com/474x/b4/86/f5/b486f569306d7ed7f32f6893387699e6.jpg"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col  shadow-lg">
                      <h3>Nextjs</h3>
                      <img
                        src={
                          "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col shadow-lg">
                      {/* <CircularProgressbar value={Ts} text={`${Ts}%`} /> */}
                      <h3>TypeScript</h3>
                      <img
                        src={
                          "https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
