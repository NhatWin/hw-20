export default function Resume() {
  return (
    <>
      <h2 id="header" className="text-center">
        Resume
      </h2>
      <div className="grid grid-cols-2 content-center gap-4">
        <div id="box" className="column">
          <p className="content is-medium">Resume</p>
          <hr />
          <a
            className="button is-primary"
            href={"/src/assets/Nhat Hung Nguyen Resume.docx"}
            download
          >
            <span>Download My Resume</span>
          </a>
        </div>
        <div id="box" className="column">
          <p className="content is-medium">Skills</p>
          <hr />
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React, Tailwind</li>
          </ul>
        </div>
      </div>
    </>
  );
}
