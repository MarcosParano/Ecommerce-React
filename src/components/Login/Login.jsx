import "./Login.css";
import Typed from "typed.js";
import { useEffect, useRef, React } from "react";
function Login() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Work in progress....", "Wow....", "Look at that thing 😯 ↘️"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="loginContainer">
        <div>
          <span className="loader" ref={el} />
        </div>
      </div>
      <div className="huevoContainer">
        <a
          className="huevo"
          href="https://media.tenor.com/VFFJ8Ei3C2IAAAAd/rickroll-rick.gif"
        >
          🥚
        </a>
      </div>
    </>
  );
}

export default Login;
