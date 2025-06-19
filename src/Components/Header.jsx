import "../Styles/Header.css";
function Header() {
  return (
    <header className="header">
      {/* Avatar and social */}
      <div className="header-img-container">
        <img
          src="https://avatars.githubusercontent.com/u/183407520?s=400&u=d47d149f28f7c7d262956616d0d446f81755bac4&v=4"
          alt="header-img"
        />
        <p className="name ">Jake Thibault</p>
        <div className="social-icons">
          <a
            href="https://github.com/J8ke-gang"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jake-t-62667732b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:thibaultjake95@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>

      {/* about me section */}
      <div className="about-me-container">
        <h1 className="about-me-header">About Me</h1>
        <p>
          I’m a passionate <strong>self‑taught web developer</strong> hoping to
          start a career as a front‑end developer. I focus on building
          <strong> responsive, user‑friendly websites and web apps</strong>. I
          love turning ideas into code and continuously learning new
          technologies to improve my web development skills.
        </p>
      </div>

      {/*tech used*/}
      <div className="tech-container">
        <h2 className="tech-header">Technologies I Use</h2>
        <ul className="tech-list">
          {/* Frontend */}
          <li>
            <i className="fa-brands fa-html5" /> HTML5
          </li>
          <li>
            <i className="fa-brands fa-css3-alt" /> CSS
          </li>
          <li>
            <i className="fa-brands fa-js" /> JavaScript (ES6+)
          </li>
          <li>
            <i className="fa-brands fa-react" /> React
          </li>

          {/* Build Tool */}
          <li>
            <i className="fa-solid fa-bolt" /> Vite
          </li>
          <li>
            <i className="fa-brands fa-js" /> Webpack
          </li>

          {/* Backend & Database */}
          <li>
            <i className="fa-brands fa-node" /> Node & Express
          </li>
          <li>
            <i className="fa-solid fa-database" /> PostgreSQL
          </li>

          {/* Testing */}
          <li>
            <i className="fa-solid fa-vial" /> Jest
          </li>

          {/* Tools & Environments */}
          <li>
            <i className="fa-brands fa-git-alt" /> Git & GitHub
          </li>
          <li>
            <i className="fa-brands fa-ubuntu" /> Ubuntu
          </li>
          {/* Design */}
          <li>
            <i className="fa-brands fa-figma" /> Figma
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
