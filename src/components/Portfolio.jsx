import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Portfolio = () => {
  return (
    <>
      <div className=" bg-gray-600 border border-red-900 ">
        <div className="">
          <div className="border">
            <div className=""></div>
            <div className="">
              <h1 className="">
                <img src={icon1} alt="" />
                Professional Work
                <img src={icon2} alt="" />
              </h1>
              <p className="">
                Explore my diverse portfolio showcasing web projects ranging
                from responsive websites to dynamic web applications,
                highlighting creativity, functionality, and user experience.
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
// eslint-disable-next-line react/prop-types
