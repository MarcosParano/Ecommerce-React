import Typed from "typed.js";
import { useEffect, useRef, React } from "react";
import "./Loader.css";

function Loader() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Loading...", "Be patient..."],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span className="loader" ref={el} />
    </div>
  );
}
export default Loader;
