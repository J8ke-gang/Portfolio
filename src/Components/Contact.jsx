import "../Styles/Contact.css";
function ContactMe() {
  return (
    <>
      <div className="contact-me-container">
        <div className="contact-me-img">
          <img
            src="https://images.pexels.com/photos/1546836/pexels-photo-1546836.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Toronto"
          />
        </div>

        <div className="contact-me">
          <h1>Contact Me</h1>
          <p>
            Please get in touch with me if you think our work could be mutually
            beneficial
          </p>
        </div>
      </div>

      <div className="contact-me-icons">
        <a href="https://github.com/J8ke-gang" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jake-t-62667732b/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:thibaultjake95@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </>
  );
}

export default ContactMe;
