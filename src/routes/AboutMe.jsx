export default function Portfolio() {
  return (
    <>
      <div id="aboutme" className="flex flex-row pt-20">
        <img
          src="./src/assets/cat.jpg"
          alt=""
          className="ml-24 mt-6 w-1/5 rounded-full border-8 border-black
          "
        />
        <div>
          <p id="summary" className="mt-16 ml-12 w-4/5">
            Hello! My name is Nhat Nguyen. Hello, I am a programmer who is just
            starting out on my coding journey. While I am still relatively new
            to the world of programming, I have discovered that my strengths lie
            in front-end development. I enjoy creating visually appealing and
            responsive user interfaces that are both functional and
            user-friendly.
          </p>
          <hr className="ml-12 w-4/5 font-bold"></hr>
        </div>
      </div>
    </>
  );
}
