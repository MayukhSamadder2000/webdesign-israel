import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

var options = {
  damping: 0.07,
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector('#my-scrollbar'), options);
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.querySelector('#my-scrollbar'));
    };
  }, []);
  return null;
};

export default Scroll;
