import parentview from "../assets/portfolio/parentview.png";
import parentbook from "../assets/portfolio/Parentbook.png";
import teacherview from "../assets/portfolio/teacherview.png";
import adminappointments from "../assets/portfolio/adminappointments.png";
import adminusermanage from "../assets/portfolio/adminusermanage.png";
import pku from "../assets/portfolio/pku.png";
import tt from "../assets/portfolio/tt.png";
import "./portfolio.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Portfolio = () => {
  const data = [
    {
      name: "PTM",
      title: "Parent Teacher Meet Platform",
      description:
        "The Parent Teacher Meet platform is a dynamic online space designed to foster effective communication and collaboration between parents and teachers. This innovative platform provides a convenient avenue for scheduling, conducting, and following up on parent-teacher meetings, enhancing engagement and involvement in the educational journey of students.",
      Client: "DAS ",
      Technologies: "Tailwind css ,ReactJs, Dot Net",
      images: [
        {
          image1: parentview,
          image2: parentbook,
          image3: teacherview,
          image4: adminappointments,
          image5: adminusermanage,
        },
      ],
    },
    {
      name: "PKU",
      title: "Phenylketonuria",
      description:
        "PKU Bite is an web app catering to phenylketonuria (PKU) individuals and caregivers, offering a comprehensive guide to over 1100 foods. It simplifies low phenylalanine diet management with a color-coded system, aligning with NSPKU's traffic light system. Features include food details, preparation methods, storage guidelines, a calculator for daily protein allowances, and easy food search.",
      client: "ImobiSoft",
      Technologies: "Reactjs Dotnet Tailwindcss",
      images: [
        {
          image1: pku,
        },
      ],
    },
    {
      name: "TT",
      title: "Treasury Today",
      description:
        "The Treasury Today Group supply the best in international corporate treasury and finance news and intelligence. From our website with the latest in dynamic digital content to our flagship publications Treasury Today and Treasury Today Asia, we are THE trusted information resource for time-pressed corporate finance executives across the world.",
      client: "Uk based Client",
      Technologies: "Bootstrap wordpress php",
      images: [
        {
          image1: tt,
        },
      ],
    },
  ];
  return (
    <>
      <div className="main-div">
        <h1 className="text-center p-4">
          <img src={icon1} alt="" />
          Professional work
          <img src={icon2} alt="" />
        </h1>
        <div>
          <p className="heading">
            Explore my diverse portfolio showcasing web projects ranging from
            responsive websites to dynamic web applications, highlighting
            creativity, functionality, and user experience.
          </p>
        </div>
        <div className="data-div">
          {data.map((project, index) => (
            <div key={index} className="maindata">
              <h2 className="title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="images">
                <Images project={project.images} name={project.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

export const Images = ({ project, name }) => {
  return (
    <div>
      {Array.isArray(project) ? (
        project?.map((img, imgIndex) => (
          <div key={imgIndex} className="image-div">
            {Object.values(img).map((image, index) => (
              <img
                key={index}
                src={image}
                width={400}
                height={400}
                alt={`${name}-image-${index}`}
              />
            ))}
          </div>
        ))
      ) : (
        <div>
          {Object.values(project).map((image, index) => (
            <img key={index} src={image} alt={`${name}-image-${index}`} />
          ))}
        </div>
      )}
    </div>
  );
};
