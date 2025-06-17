function Header() {
  return (
    <Header>
      <div className="header-img-container">
        <img
          src="https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Canada"
        />
        <p>Jake Thibault</p>
      </div>
      <section className="about-me">
        <h1 className="about-me-header">About Me</h1>
        <p>about me information</p>
        <div className="about-me-icons">
          <a
            href="https://github.com/J8ke-gang"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:example@example.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>
    </Header>
  );
}

export default Header;
