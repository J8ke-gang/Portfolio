import React, { useState } from "react";
import "../Styles/MainProject.css";

function MainProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (imgSrc) => {
    setActiveImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage("");
  };

  return (
    <main className="project-container">
      <h2>Check Out Some Of My Projects</h2>
      <section className="projects">
        {/* Sign Up Page */}
        <div className="project">
          <h3>Sign Up Page</h3>
          <img
            src="/screenshots/project1.png"
            alt="Sign Up Page"
            onClick={() => openModal("/screenshots/project1.png")}
            className="project-thumbnail"
          />
          <a
            href="https://github.com/J8ke-gang/sign-up-page"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Etch A Sketch */}
        <div className="project">
          <h3>Etch A Sketch</h3>
          <img
            src="/screenshots/project2.png"
            alt="Etch A Sketch"
            onClick={() => openModal("/screenshots/project2.png")}
            className="project-thumbnail"
          />
          <a
            href="https://j8ke-gang.github.io/etch-a-sketch/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/J8ke-gang/etch-a-sketch"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Weather App */}
        <div className="project">
          <h3>Weather App</h3>
          <img
            src="/screenshots/project 3.jpeg"
            alt="Weather App"
            onClick={() => openModal("/screenshots/project 3.jpeg")}
            className="project-thumbnail"
          />

          <a
            href="https://j8ke-gang.github.io/Weather-app/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/J8ke-gang/Weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Restaurant Page */}
        <div className="project">
          <h3>Restaurant Page</h3>
          <img
            src="/screenshots/project 4.png"
            alt="Restaurant Page"
            onClick={() => openModal("/screenshots/project 4.png")}
            className="project-thumbnail"
          />

          <a
            href="https://j8ke-gang.github.io/restaurant-page/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/J8ke-gang/restaurant-page"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Wheres Waldo Alt */}
        <div className="project">
          <h3>Where's Waldo Alt</h3>
          <img
            src="/screenshots/project 5.png"
            alt="Where's Waldo"
            onClick={() => openModal("/screenshots/project 5.png")}
            className="project-thumbnail"
          />

          <a
            href="https://where-s-waldo-alt-project.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/J8ke-gang/Where-s-Waldo-Alt-Project"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Dashboard Page */}
        <div className="project">
          <h3>Dashboard Page</h3>
          <img
            src="/screenshots/project 6.png"
            alt="Dashboard Page"
            onClick={() => openModal("/screenshots/project 6.png")}
            className="project-thumbnail"
          />

          <a
            href="https://j8ke-gang.github.io/dashboard-project/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/J8ke-gang/dashboard-project"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Calculator */}
        <div className="project">
          <h3>Calculator</h3>
          <img
            src="/screenshots/project 7.png"
            alt="Dashboard Page"
            onClick={() => openModal("/screenshots/project 7.png")}
            className="project-thumbnail"
          />

          <a
            href="https://j8ke-gang.github.io/Calculator/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/J8ke-gang/Calculator"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Memory Game */}
        <div className="project">
          <h3>Memory Game</h3>
          <img
            src="/screenshots/project 8.png"
            alt="Dashboard Page"
            onClick={() => openModal("/screenshots/project 8.png")}
            className="project-thumbnail"
          />

          <a
            href="https://project-memory-card-liart.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/J8ke-gang/project-memory-card"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </section>

      {/*Modal*/}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={activeImage} alt="Full Screenshot" />
          </div>
        </div>
      )}
    </main>
  );
}

export default MainProjects;
