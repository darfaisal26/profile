import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img2 from "../assets/icon1.png";
import img3 from "../assets/icon2.png";
import icon1 from "../assets/testimonial-icon.png";

const Experience = () => {
  return (
    <>
      <div className="testimonial">
        <div className="row text-center gx-0">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>
              <img src={img2} alt="" />
              Experience
              <img src={img3} alt="" />
            </h1>
            <p className="px-2 px-md-5 text-white">
              Frontend development shapes user experiences by crafting visually
              appealing, responsive interfaces using HTML, CSS, and JavaScript,
              seamlessly blending design and functionality for websites and
              applications.
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="container gx-0 test_slide1 ">
          <div className="row gx-0">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {/* <SwiperSlide>
                <div className="test_1" data-aos="fade-up">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3 text-white ">
                    Interned at <span>Cybanor as Frontend Developer</span>.
                    Learned HTML, CSS, JavaScript, and ReactJS. Collaborated on
                    projects, ensuring responsive designs and user-friendly
                    interfaces
                  </p>
                  <p className="text-white">
                    <span className="mx-2 text-white">Intern</span>July 2022 -
                    Dec 2022{" "}
                  </p>

                  <div className="row">
                    <div className="col-md-9 text-white">
                      <h5>Faisal Nazir</h5>
                      <p className="text-white">FrontEnd Developer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div className="test_1 shadow" data-aos="fade-up">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3 text-white ">
                    Since March 2023, I have been a valuable contributor to an
                    <span>AIIOTS GEEK WORLD PVT LTD company</span>, specializing
                    in frontend development. My role involved diverse projects,
                    predominantly utilizing ReactJS. I excelled in API
                    integration, translating designs into seamless
                    implementations, and more.
                  </p>
                  <p className="text-white">
                    <span className=" text-white mx-2">Intern</span>March 2023 -
                    August 2023{" "}
                  </p>
                  <p className="text-white">
                    <span className=" text-white mx-2">FullTime</span>Sep 2023 -
                    Present{" "}
                  </p>
                  <div className="row">
                    <div className="col-md-9">
                      <h5 className="text-white">Faisal Nazir</h5>
                      <p className="text-white">FrontEnd Developer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
