export default function Portfolio() {
  return (
    <>
      <h2 id="header" className="text-center">
        Contact
      </h2>
      <form className="text-left">
        <label htmlFor="name">Name</label>
        <input type={"text"} name="name" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type={"text"} name="email" placeholder="Your email" />

        <label htmlFor="subject">Subject</label>
        <textarea name="subject" placeholder="Write something.."></textarea>

        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
