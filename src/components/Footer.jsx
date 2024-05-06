const Footer = () => {
  return (
    <>
      <div className="footer container-fluid">
        <div className="footer_main container">
          <div className="footer_1">
            <a className="navbar-brand my-3" href="#">
              <h2>FAISAL</h2>
              <h2>FAISAL</h2>
            </a>
            <p className="mt-4">
              Lets build something incredible together. Reach out via email or
              connect on LinkedIn
            </p>
            <div className="ft_icon">
              <a
                href="https://www.instagram.com/faisal_dar_6/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/faisal-nazir-31ba22244/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/darfaisal26"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="mailto:iamfaisal779@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="footer_2">
            <h4 className="pb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          {/* <div className="footer_3">
            <h4 className="pb-2">Leave A Message</h4>
            <form action="/contact">
              <div className="footer_3_input mt-4">
                <input type="email" placeholder="Email Address" required />
                <button className="btn3" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
      {/* <!-- ******************************************** --> */}
      <div className="footer_end">
        <p>© 2024 | All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
