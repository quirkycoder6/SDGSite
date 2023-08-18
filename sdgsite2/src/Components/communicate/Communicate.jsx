import "./communicate.scss";
import { useState } from "react";

export default function Communicate() {
  const [message, setMessage] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="communicate" id="communicate">
      <div className="left">
        <div className="wall">
          <h2>Posts</h2>
        </div>
      </div>
      <div className="right">
        <h2>Communicate</h2>
        <h4>Pin down your thoughts!</h4>
        <form onSubmit={handleSubmit}>
          <input id="username" type="text" placeholder="username" />
          <textarea id="message" placeholder="Message"></textarea>
          <button
            type="submit"
          >Post
          </button>
          {message && <span>Thanks for posting :)</span>}
        </form>
      </div>
    </div>
  );
}
