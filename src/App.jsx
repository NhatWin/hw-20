import React from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./routes/AboutMe";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";

function App() {
  const [currentPath, setCurrentPath] = React.useState("/");

  const handleNavClick = (event) => {
    event.preventDefault();
    setCurrentPath("/" + event.target.textContent.toLowerCase());
  };

  switch (currentPath) {
    case "/":
      return (
        <>
          <NavBar handleClick={handleNavClick} />
          <AboutMe />
        </>
      );
    case "/portfolio":
      return (
        <>
          <NavBar handleClick={handleNavClick} />
          <Portfolio />
        </>
      );
    case "/contact":
      return (
        <>
          <NavBar handleClick={handleNavClick} />
          <Contact />
        </>
      );
    case "/resume":
      return (
        <>
          <NavBar handleClick={handleNavClick} />
          <Resume />
        </>
      );
  }

  return (
    <>
      <NavBar handleClick={handleNavClick} />
      <AboutMe />
    </>
  );
}

export default App;
