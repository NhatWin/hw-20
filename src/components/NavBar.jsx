export default function NavBar({ handleClick }) {
  return (
    <nav className="my-8">
      <ul className="flex justify-around gap-x-8">
        <li>
          <a href="/" onClick={handleClick}>
            About Me
          </a>
        </li>
        <li>
          <a href="/portfolio" onClick={handleClick}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="/contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        <li>
          <a href="/resume" onClick={handleClick}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
