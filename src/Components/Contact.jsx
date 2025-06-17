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
          <h3>
            1234 Road Drive, GTA, Ontario, 123-456-7891 <br />
            example@example.com
          </h3>
        </div>
      </div>

      <div className="contact-me-icons">
        <a href="https://github.com/J8ke-gang" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:example@example.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </>
  );
}

export default ContactMe;
