export default function Portfolio() {
  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      <a href="https://fbi-profiler.herokuapp.com">
        <img
          src="./src/assets/fbi-project.png"
          alt=""
          width="500px"
          height="auto"
          className="m-5 border-8 border-black"
        />
      </a>
      <a href="https://github.com/NhatWin/Movie_Review_Game">
        <img
          src="./src/assets/movie-review-project.png"
          alt=""
          width="500px"
          height="auto"
          className="m-5 border-8 border-black"
        />
      </a>
      <a href="https://nhatwin.github.io/hw-4/">
        <img
          src="./src/assets/quiz-game.png"
          alt=""
          width="500px"
          height="auto"
          className="m-5 border-8 border-black"
        />
      </a>
    </div>
  );
}
