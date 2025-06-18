import "../Styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-img-container">
        <img
          src="https://avatars.githubusercontent.com/u/183407520?s=400&u=d47d149f28f7c7d262956616d0d446f81755bac4&v=4"
          alt="header-img"
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
    </header>
  );
}

export default Header;
